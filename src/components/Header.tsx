import { FC } from "react";
import HeaderNav from "./HeaderNav";
import Image from "./Common/Image";
import { Link } from "react-router-dom";

const Header: FC = () => (
  <header className="flex justify-between flex-nowrap px-4 py-4 lg:px-6 lg:py-2 items-center mt-2 lg:mt-6">
    <Link to="/">
      <Image
        imageUrl="/images/fgt-logo.svg"
        altText="Fast Growing Trees"
        style={{ width: "30px", height: "38px" }}
      />
    </Link>
    <HeaderNav />
  </header>
);

export default Header;
