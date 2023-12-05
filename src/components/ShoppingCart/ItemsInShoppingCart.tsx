import Image from "components/Common/Image";
import { useShoppingCart } from "contexts/ShoppingCartContext";
import { FC } from "react";
import { removeFromCart } from "utils/shoppingCart-helper";

const ItemsInShoppingCart: FC = () => {
  const { state, dispatch } = useShoppingCart();

  return (
    <div className="product-list">
      {state.products.length ? (
        state.products.map((product) => (
          <div className="flex justify-between py-6">
            <Image
              imageUrl={product.thumbnail ?? ""}
              altText=""
              style={{ width: "110px" }}
            />
            {product.title}
            <div>
              <button>-</button> {product.quantity} <button>+</button>
            </div>
            <button
              onClick={() => removeFromCart(product.id as number, dispatch)}
            >
              <Image
                imageUrl="/images/remove-icon.svg"
                altText="Remove item from cart"
              />
            </button>
          </div>
        ))
      ) : (
        <p className="font-bold">Your shopping cart is empty</p>
      )}
    </div>
  );
};

export default ItemsInShoppingCart;
