import Image from "components/Common/Image";
import { FC } from "react";
import CloseShoppingCart from "./CloseShoppingCart";

const ShoppingCartHeader: FC = () => {
  return (
    <header className="flex justify-start sticky top-0 py-6 bg-white">
      <CloseShoppingCart />
      <Image
        className="w-1/2"
        imageUrl="\images\cart-logo.svg"
        altText="Shopping Cart"
        style={{ width: "36px" }}
      />
    </header>
  );
};

export default ShoppingCartHeader;
