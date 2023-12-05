import Image from "components/Common/Image";
import { useShoppingCart } from "contexts/ShoppingCartContext";
import { toggleCart } from "utils/shoppingCart-helper";

const CloseShoppingCart = () => {
  const { dispatch } = useShoppingCart();

  return (
    <div className="w-1/2">
      <button onClick={() => toggleCart(dispatch)}>
        <Image
          imageUrl="\images\close-btn.svg"
          altText="Close Shopping Cart"
          style={{ width: "24px" }}
        />
      </button>
    </div>
  );
};

export default CloseShoppingCart;
