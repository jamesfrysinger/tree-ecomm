import { FC } from "react";
import Image from "./Common/Image";
import { useShoppingCart } from "contexts/ShoppingCartContext";

const HeaderNav: FC = () => {
  const { state } = useShoppingCart();

  const quantities = state.products.map((item) => item?.quantity ?? 0);
  const itemsInCart = quantities.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return (
    <nav className="relative">
      <Image
        imageUrl="/images/cart-icon.svg"
        altText="Fast Growing Trees"
        style={{ width: "36px", height: "36px" }}
      />
      <div className="w-5 h-5 bg-red-600 rounded-full text-white text-xs flex items-center justify-center absolute top-0 right-0 translate-x-2  -translate-y-2">
        <p className="text-center">{itemsInCart}</p>
      </div>
    </nav>
  );
};

export default HeaderNav;
