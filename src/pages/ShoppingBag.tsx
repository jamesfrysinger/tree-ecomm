import { FC } from "react";
import { useShoppingCart } from "contexts/ShoppingCartContext";
import { formattedPrice } from "utils/shoppingCart-helper";

const ShoppingBag: FC = () => {
  const { state, dispatch } = useShoppingCart();

  const removeFromCart = (productId: number) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id: productId } });
  };

  return (
    <section className="fixed top-0 left-0 bg-white bg-opacity-80 h-screen w-screen">
      <div className="absolute right-0 top-0 bottom-0 bg-white w-2/4 max-w-xl">
        <header className="cart-header">
          <button className="close"></button>
          <img className="cart-icon" />
        </header>
        <div className="promo-message">
          <p>You're $100.05 away from free shipping!</p>
          <div className="progress-bar"></div>
        </div>
        <div className="product-list">
          <div className="product-item">
            {state.products &&
              state.products.map((product) => (
                <li key={product.id}>
                  {product.title} - Quantity: {product.quantity}
                  <button onClick={() => removeFromCart(product.id as number)}>
                    Remove
                  </button>
                </li>
              ))}
          </div>
        </div>
        <div className="subtotal">
          <h2>Subtotal</h2>
          <p>{formattedPrice(state.subTotal)}</p>
        </div>
        <div className="recommended-items">
          <div className="product-item">
            <img src="" />
            <p>Description</p>
            <button>+</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingBag;
