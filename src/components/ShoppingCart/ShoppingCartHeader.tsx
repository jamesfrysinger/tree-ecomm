import Image from "components/Common/Image";
import { FC } from "react";
import CloseShoppingCart from "./CloseShoppingCart";

const ShoppingCartHeader: FC = () => {
  return (
    <header className="flex justify-start">
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
