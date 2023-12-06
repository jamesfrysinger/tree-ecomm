import Image from "components/Common/Image";
import { useShoppingCart } from "contexts/ShoppingCartContext";
import { FC } from "react";
import { IProductShoppingCart } from "types/shoppingCartType";
import { addToCart, decrementQuantity } from "utils/shoppingCart-helper";

const EditProductQuantity: FC<{
  product: IProductShoppingCart;
}> = ({ product }) => {
  const { dispatch } = useShoppingCart();

  return (
    <div className="flex ml-4">
      <button onClick={() => decrementQuantity(product, dispatch)}>
        <Image imageUrl="/images/minus-circle.svg" altText="Remove Quantity" />
      </button>
      <p className="font-semibold px-3">{product.quantity}</p>
      <button onClick={() => addToCart(product, dispatch)}>
        <Image imageUrl="/images/plus-circle.svg" altText="Add Quantity" />
      </button>
    </div>
  );
};

export default EditProductQuantity;
