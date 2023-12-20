import { createContext, useReducer, useContext, ReactNode, FC } from "react";
import {
  IContextProps,
  IShoppingCartState,
  TAction,
} from "../types/shoppingCartType";

const ShoppingCartContext = createContext<IContextProps | undefined>(undefined);

const LOCAL_STORAGE_KEY = "shoppingCart";

const loadStateFromLocalStorage = (): IShoppingCartState | undefined => {
  try {
    const serializedState = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Error loading state from local storage", err);
    return undefined;
  }
};

const saveStateToLocalStorage = (state: IShoppingCartState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(LOCAL_STORAGE_KEY, serializedState);
  } catch (err) {
    console.error("Error saving state to local storage", err);
  }
};

window.addEventListener("beforeunload", () => {
  const existingState = loadStateFromLocalStorage();
  if (existingState) {
    const newState = { ...existingState, cartIsOpen: false };
    saveStateToLocalStorage(newState);
  }
});

export const reducer = (
  state: IShoppingCartState,
  action: TAction
): IShoppingCartState => {
  let updatedSubTotal = state.subTotal;

  switch (action.type) {
    case "ADD_TO_CART" || "INCREASE_QUANTITY":
      const existingProductIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        const updatedProducts = [...state.products];
        updatedProducts[existingProductIndex] = {
          ...updatedProducts[existingProductIndex],
          quantity: (updatedProducts[existingProductIndex].quantity || 0) + 1,
        };
        updatedSubTotal += updatedProducts[existingProductIndex].price || 0;
        const newState = {
          ...state,
          products: updatedProducts,
          subTotal: updatedSubTotal,
        };
        saveStateToLocalStorage(newState);
        return newState;
      } else {
        const newState = {
          ...state,
          products: [...state.products, { ...action.payload, quantity: 1 }],
          subTotal: state.subTotal + (action.payload.price || 0),
        };
        saveStateToLocalStorage(newState);
        return newState;
      }

    case "REMOVE_FROM_CART":
      const removedProduct = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (!removedProduct) {
        return state;
      }

      const updatedProducts = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      const newStateRemove = {
        ...state,
        products: updatedProducts,
        subTotal:
          state.subTotal -
          (removedProduct.price || 0) * (removedProduct.quantity || 1),
      };
      saveStateToLocalStorage(newStateRemove);
      return newStateRemove;

    case "DECREMENT_QUANTITY":
      const existingProductIndexDecrement = state.products.findIndex(
        (product) => product.id === action.payload.id
      );

      if (existingProductIndexDecrement !== -1) {
        const updatedProductsDecrement = [...state.products];
        const currentProduct =
          updatedProductsDecrement[existingProductIndexDecrement];

        const updatedQuantity = Math.max(
          1,
          (currentProduct!.quantity || 0) - 1
        );

        if (currentProduct!.quantity && currentProduct!.quantity > 1) {
          updatedSubTotal = state.subTotal - (currentProduct!.price || 0);
          updatedProductsDecrement[existingProductIndexDecrement] = {
            ...currentProduct!,
            quantity: updatedQuantity,
          };
        } else {
          updatedProductsDecrement[existingProductIndexDecrement] = {
            ...currentProduct!,
            quantity: updatedQuantity,
          };
        }

        const newStateDecrement = {
          ...state,
          products: updatedProductsDecrement,
          subTotal: updatedSubTotal,
        };

        saveStateToLocalStorage(newStateDecrement);
        return newStateDecrement;
      } else {
        return state;
      }
    case "TOGGLE_CART":
      return {
        ...state,
        cartIsOpen: !state.cartIsOpen,
      };

    default:
      return state;
  }
};

export const ShoppingCartProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const initialState: IShoppingCartState = loadStateFromLocalStorage() || {
    products: [],
    subTotal: 0,
    cartIsOpen: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ShoppingCartContext.Provider value={{ state, dispatch }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = (): IContextProps => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error(
      "useShoppingCart must be used within a ShoppingCartProvider"
    );
  }
  return context;
};
