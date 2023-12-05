import { useShoppingCart } from "contexts/ShoppingCartContext";
import { FC } from "react";
import { IProductShoppingCart } from "types/shoppingCartType";
import { addToCart, decrementQuantity } from "utils/shoppingCart-helper";

const EditProductQuantity: FC<{
  product: IProductShoppingCart;
}> = ({ product }) => {
  const { dispatch } = useShoppingCart();

  return (
    <div>
      <button onClick={() => decrementQuantity(product, dispatch)}>-</button>
      {product.quantity}
      <button onClick={() => addToCart(product, dispatch)}>+</button>
    </div>
  );
};

export default EditProductQuantity;
