import Image from "components/Common/Image";
import { FC } from "react";
import ShoppingCartCloseBtn from "./ShoppingCartCloseBtn";

const ShoppingCartHeader: FC = () => {
  return (
    <header className="flex justify-start sticky top-0 py-6 bg-white">
      <ShoppingCartCloseBtn />
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
