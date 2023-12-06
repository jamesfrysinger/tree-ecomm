import { FC } from "react";
import { IProductDetails } from "types/productsType";
import { useShoppingCart } from "contexts/ShoppingCartContext";
import {
  addToCart,
  buildProductForCart,
  toggleCart,
} from "utils/shoppingCart-helper";
import Button from "components/Common/Button";

interface ProductDetailsComponent {
  productDetails: IProductDetails;
}

const ProductDetailAddToCart: FC<ProductDetailsComponent> = ({
  productDetails,
}) => {
  const { state, dispatch } = useShoppingCart();

  const product = buildProductForCart(productDetails);

  return (
    <Button
      onClick={() => {
        addToCart(product, dispatch);
        toggleCart(state, dispatch);
      }}
      className="add-to-cart-btn h-12 rounded-md w-full bg-red-600 hover:bg-red-700 transition-all text-white text-2xl"
    >
      Add To Cart
    </Button>
  );
};

export default ProductDetailAddToCart;
