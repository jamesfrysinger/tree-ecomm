import Image from "components/Common/Image";
import { useShoppingCart } from "contexts/ShoppingCartContext";
import { toggleCart } from "utils/shoppingCart-helper";

const CloseShoppingCart = () => {
  const { dispatch } = useShoppingCart();

  return (
    <button className="close w-1/2" onClick={() => toggleCart(dispatch)}>
      <Image
        imageUrl="\images\close-btn.svg"
        altText="Close Shopping Cart"
        style={{ width: "24px" }}
      />
    </button>
  );
};

export default CloseShoppingCart;
