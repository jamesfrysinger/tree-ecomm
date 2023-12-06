import { FC } from "react";
import { useShoppingCart } from "contexts/ShoppingCartContext";
import FreeShippingProgressBar from "components/ShoppingCart/FreeShippingProgressBar";
import ShoppingCartHeader from "components/ShoppingCart/ShoppingCartHeader";
import ItemsInShoppingCart from "components/ShoppingCart/ItemsInShoppingCart";
import ShoppingCartBalance from "components/ShoppingCart/ShoppingCartBalance";
import RecommendedProducts from "components/ShoppingCart/RecommendedProducts";

const ShoppingCart: FC = () => {
  const { state } = useShoppingCart();

  return (
    <section
      className={`fixed top-0 left-0 bg-white bg-opacity-80 h-screen w-screen ${
        !state.cartIsOpen ? "hidden" : null
      }`}
    >
      <div className="absolute right-0 top-0 bottom-0 bg-white w-full md:w-2/4 max-w-xl px-6 shadow-lg overflow-y-auto">
        <ShoppingCartHeader />
        <FreeShippingProgressBar totalAmount={state.subTotal} />
        <ItemsInShoppingCart />
        <ShoppingCartBalance subTotal={state.subTotal} />
        <RecommendedProducts />
      </div>
    </section>
  );
};

export default ShoppingCart;
