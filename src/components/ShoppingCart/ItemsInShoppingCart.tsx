import Image from "components/Common/Image";
import { useShoppingCart } from "contexts/ShoppingCartContext";
import { FC } from "react";
import { removeFromCart } from "utils/shoppingCart-helper";
import EditProductQuantity from "./EditCartProductQuantity";

const ItemsInShoppingCart: FC = () => {
  const { state, dispatch } = useShoppingCart();

  return (
    <div className="h-30 overflow-y-auto max-h-96 px-6">
      {state.products.length ? (
        state.products.map((product) => (
          <div className="flex py-6 items-center" key={product.id}>
            <Image
              imageUrl={product.thumbnail as string}
              placeholderUrl="/images/placeholder-image.jpg"
              altText=""
              style={{ width: "110px" }}
              className="pr-3"
            />
            <div className="product-details">
              {product.title}
              <div className="flex w-full mt-4">
                <p>${product.price}</p>
                <EditProductQuantity product={product} />
              </div>
            </div>
            <button
              onClick={() => removeFromCart(product.id as number, dispatch)}
              className="ml-auto"
            >
              <Image
                imageUrl="/images/remove-icon.svg"
                altText="Remove item from cart"
              />
            </button>
          </div>
        ))
      ) : (
        <p className="font-bold text-center">Your shopping cart is empty</p>
      )}
    </div>
  );
};

export default ItemsInShoppingCart;
