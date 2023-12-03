import { FC } from "react";
import { IProductDetails } from "../../types/productsType";
import { useShoppingCart } from "../../contexts/ShoppingCartContext";
interface ProductDetailsComponent {
  productDetails?: IProductDetails;
}

const ProductDetailAddToCart: FC<ProductDetailsComponent> = ({
  productDetails,
}) => {
  const { dispatch } = useShoppingCart();

  const product = {
    id: productDetails?.id,
    name: productDetails?.title,
    description: productDetails?.body,
    price: productDetails?.price,
    quantity: 1,
  };

  const addToCart = () => {
    if (productDetails)
      dispatch({
        type: "ADD_TO_CART",
        payload: { ...product, quantity: product.quantity },
      });
  };

  return (
    <button onClick={addToCart} disabled={!productDetails}>
      Add To Cart
    </button>
  );
};

export default ProductDetailAddToCart;
