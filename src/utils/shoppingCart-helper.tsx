import { IProductDetails } from "types/productsType";
import { IProductShoppingCart } from "types/shoppingCartType";
import { TAction } from "types/shoppingCartType";

export const formattedPrice = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

export const addToCart = (
  productDetails: IProductDetails | undefined,
  product: IProductShoppingCart,
  dispatch: React.Dispatch<TAction>
) => {
  if (productDetails)
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...product, quantity: product.quantity },
    });
};

export const removeFromCart = (
  productId: number,
  dispatch: React.Dispatch<TAction>
) => {
  dispatch({ type: "REMOVE_FROM_CART", payload: { id: productId } });
};
