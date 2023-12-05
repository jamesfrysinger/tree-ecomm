import { FC } from "react";
import { IProductDetails } from "types/productsType";
import { useShoppingCart } from "contexts/ShoppingCartContext";
import styled from "styled-components";

interface ProductDetailsComponent {
  productDetails?: IProductDetails;
}

const ButtonAddToCart = styled.button`
  background-color: var(--color-red);
`;

const ProductDetailAddToCart: FC<ProductDetailsComponent> = ({
  productDetails,
}) => {
  const { dispatch } = useShoppingCart();

  const product = {
    id: productDetails?.id,
    title: productDetails?.title,
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
    <ButtonAddToCart
      onClick={addToCart}
      disabled={!productDetails}
      className="h-12 rounded-md w-full hover:bg-red-700 transition-all text-white"
    >
      Add To Cart
    </ButtonAddToCart>
  );
};

export default ProductDetailAddToCart;
