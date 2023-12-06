import { FC } from "react";
import { useShoppingCart } from "contexts/ShoppingCartContext";
import { toggleCart } from "utils/shoppingCart-helper";
import Button from "./Common/Button";

const HeaderNav: FC = () => {
  const { state, dispatch } = useShoppingCart();

  const quantities = state.products.map((item) => item?.quantity ?? 0);
  const itemsInCart = quantities.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return (
    <nav className="relative">
      <Button
        imageUrl="/images/cart-icon.svg"
        altText="Fast Growing Trees"
        onClick={() => toggleCart(state, dispatch)}
      >
        <div className="w-5 h-5 bg-red-600 rounded-full text-white text-xs flex items-center justify-center absolute top-0 right-0 translate-x-2  -translate-y-2">
          <p className="text-center">{itemsInCart}</p>
        </div>
      </Button>
    </nav>
  );
};

export default HeaderNav;
