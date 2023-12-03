import { FC } from "react";
import { useShoppingCart } from "../../contexts/ShoppingCartContext";
import { formattedPrice } from "../../utils/shoppingCart-helper";

const ShoppingBag: FC = () => {
  const { state, dispatch } = useShoppingCart();

  const removeFromCart = (productId: number) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id: productId } });
  };

  console.log(state);
  return (
    <section className="shopping-bag">
      Shopping Bag
      {state.products &&
        state.products.map((product) => (
          <li key={product.id}>
            {product.description} - Quantity: {product.quantity}
            <button onClick={() => removeFromCart(product.id as number)}>
              Remove
            </button>
          </li>
        ))}
      <h1>{formattedPrice(state.subTotal)}</h1>
    </section>
  );
};

export default ShoppingBag;
