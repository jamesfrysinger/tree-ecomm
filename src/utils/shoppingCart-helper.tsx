import { IProductShoppingCart } from "types/shoppingCartType";
import { TAction } from "types/shoppingCartType";

export const formattedPrice = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

export const addToCart = (
  product: IProductShoppingCart,
  dispatch: React.Dispatch<TAction>
) => {
  if (product)
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...product, quantity: product.quantity },
    });
};

export const decrementQuantity = (
  product: IProductShoppingCart,
  dispatch: React.Dispatch<TAction>
) => {
  if (product)
    dispatch({
      type: "DECREMENT_QUANTITY",
      payload: { ...product, id: product.id ?? 0 },
    });
};

export const removeFromCart = (
  productId: number,
  dispatch: React.Dispatch<TAction>
) => {
  dispatch({ type: "REMOVE_FROM_CART", payload: { id: productId } });
};

export const toggleCart = (dispatch: React.Dispatch<TAction>) => {
  dispatch({
    type: "TOGGLE_CART",
  });
};
