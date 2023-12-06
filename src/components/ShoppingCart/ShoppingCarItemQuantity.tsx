import Button from "components/Common/Button";
import { useShoppingCart } from "contexts/ShoppingCartContext";
import { FC } from "react";
import { IProductShoppingCart } from "types/shoppingCartType";
import { addToCart, decrementQuantity } from "utils/shoppingCart-helper";

const ShoppingCarItemQuantity: FC<{
  product: IProductShoppingCart;
}> = ({ product }) => {
  const { dispatch } = useShoppingCart();

  return (
    <div className="flex ml-4">
      <Button
        imageUrl="/images/minus-circle.svg"
        altText="Remove Quantity"
        onClick={() => decrementQuantity(product, dispatch)}
      />
      <p className="font-semibold px-3">{product.quantity}</p>
      <Button
        imageUrl="/images/plus-circle.svg"
        altText="Add Quantity"
        onClick={() => addToCart(product, dispatch)}
      />
    </div>
  );
};

export default ShoppingCarItemQuantity;
