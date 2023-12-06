import { FC } from "react";
import { IProductDetails } from "types/productsType";
import { useShoppingCart } from "contexts/ShoppingCartContext";
import styled from "styled-components";
import {
  addToCart,
  buildProductForCart,
  toggleCart,
} from "utils/shoppingCart-helper";

interface ProductDetailsComponent {
  productDetails: IProductDetails;
}

const ButtonAddToCart = styled.button`
  background-color: var(--color-red);
`;

const ProductDetailAddToCart: FC<ProductDetailsComponent> = ({
  productDetails,
}) => {
  const { state, dispatch } = useShoppingCart();

  const product = buildProductForCart(productDetails);

  return (
    <ButtonAddToCart
      onClick={() => {
        addToCart(product, dispatch);
        toggleCart(state, dispatch);
      }}
      disabled={!productDetails}
      className="h-12 rounded-md w-full hover:bg-red-700 transition-all text-white text-2xl"
    >
      Add To Cart
    </ButtonAddToCart>
  );
};

export default ProductDetailAddToCart;
