import { FC } from "react";
import { useShoppingCart } from "contexts/ShoppingCartContext";
import { formattedPrice } from "utils/shoppingCart-helper";
import FreeShippingProgressBar from "components/ShoppingCart/FreeShippingProgressBar";
import ShoppingCartHeader from "components/ShoppingCart/ShoppingCartHeader";
import ItemsInShoppingCart from "components/ShoppingCart/ItemsInShoppingCart";

const ShoppingBag: FC = () => {
  const { state } = useShoppingCart();

  return (
    <section className="fixed top-0 left-0 bg-white bg-opacity-80 h-screen w-screen">
      <div className="absolute right-0 top-0 bottom-0 bg-white w-2/4 max-w-xl px-6 py-6">
        <ShoppingCartHeader />
        <FreeShippingProgressBar totalAmount={Math.round(state.subTotal)} />
        <ItemsInShoppingCart />
        <div className="subtotal">
          <h2>Subtotal</h2>
          <p>{formattedPrice(state.subTotal)}</p>
        </div>
        <div className="recommended-items">
          <div className="product-item">
            <img src="" alt="" />
            <p>Description</p>
            <button>+</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingBag;
