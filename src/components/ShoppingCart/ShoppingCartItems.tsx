import Image from "components/Common/Image";
import { useShoppingCart } from "contexts/ShoppingCartContext";
import { FC } from "react";
import { removeFromCart } from "utils/shoppingCart-helper";
import ShoppingCarItemQuantity from "./ShoppingCarItemQuantity";
import Button from "components/Common/Button";

const ShoppingCartItems: FC = () => {
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
                <ShoppingCarItemQuantity product={product} />
              </div>
            </div>
            <Button
              className="ml-auto"
              imageUrl="/images/remove-icon.svg"
              altText="Remove item from cart"
              onClick={() => removeFromCart(product.id as number, dispatch)}
              imageStyle={{ width: "36px" }}
            />
          </div>
        ))
      ) : (
        <p className="font-bold text-center">Your shopping cart is empty</p>
      )}
    </div>
  );
};

export default ShoppingCartItems;
