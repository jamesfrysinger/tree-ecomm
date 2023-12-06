import Button from "components/Common/Button";
import { useShoppingCart } from "contexts/ShoppingCartContext";
import { toggleCart } from "utils/shoppingCart-helper";

const ShoppingCartCloseBtn = () => {
  const { state, dispatch } = useShoppingCart();

  return (
    <div className="w-1/2">
      <Button
        imageUrl="\images\close-btn.svg"
        altText="Close Shopping Cart"
        onClick={() => toggleCart(state, dispatch)}
      />
    </div>
  );
};

export default ShoppingCartCloseBtn;
