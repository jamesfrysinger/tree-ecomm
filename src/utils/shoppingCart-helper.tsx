import { IProductDetails } from "types/productsType";
import {
  IProductShoppingCart,
  IShoppingCartState,
} from "types/shoppingCartType";
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

export const toggleCart = (
  state: IShoppingCartState,
  dispatch: React.Dispatch<TAction>
) => {
  dispatch({
    type: "TOGGLE_CART",
  });

  !state.cartIsOpen
    ? document.body.classList.add("overflow-hidden")
    : document.body.classList.remove("overflow-hidden");
};

export const buildProductForCart = (data: IProductDetails) => {
  return {
    id: data?.id,
    title: data?.title,
    description: data?.body,
    productType: data.product_type,
    price: data?.price,
    thumbnail: data?.thumbnail.src,
    quantity: 1,
  };
};

export const matchProductAndRecQuantityInCart = (
  cartState: IShoppingCartState,
  productToMatchQuantity: {
    productType: string;
    rec: string;
  },
  currentRec: string
): boolean => {
  if (currentRec === productToMatchQuantity.rec) {
    const productTypeInCart = cartState.products
      .filter((prod) => productToMatchQuantity.productType === prod.productType)
      .reduce((sum, tree) => sum + (tree.quantity ?? 0), 0);

    const recInCart = cartState.products
      .filter((prod) => productToMatchQuantity.rec === prod.title)
      .reduce((sum, rec) => sum + (rec.quantity ?? 0), 0);

    return productTypeInCart > recInCart;
  }
  return false;
};
