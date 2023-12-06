import { FC } from "react";
import { useShoppingCart } from "contexts/ShoppingCartContext";
import ShoppingCartHeader from "components/ShoppingCart/ShoppingCartHeader";
import ShoppingCartItems from "components/ShoppingCart/ShoppingCartItems";
import ShoppingCartBalance from "components/ShoppingCart/ShoppingCartBalance";
import ShoppingCartRecommendedProducts from "components/ShoppingCart/ShoppingCartRecommendedProducts";
import ShoppingCartFreeShippingProgressBar from "components/ShoppingCart/ShoppingCartFreeShippingProgressBar";

const ShoppingCart: FC = () => {
  const { state } = useShoppingCart();

  return (
    <section
      className={`fixed top-0 left-0 bg-white bg-opacity-80 h-screen w-screen ${
        state.cartIsOpen ? "" : "hidden"
      }`}
    >
      <div className="absolute right-0 top-0 bottom-0 bg-white w-full md:w-2/4 max-w-xl px-6 shadow-lg overflow-y-auto">
        <ShoppingCartHeader />
        <ShoppingCartFreeShippingProgressBar totalAmount={state.subTotal} />
        <ShoppingCartItems />
        <ShoppingCartBalance subTotal={state.subTotal} />
        <ShoppingCartRecommendedProducts />
      </div>
    </section>
  );
};

export default ShoppingCart;
