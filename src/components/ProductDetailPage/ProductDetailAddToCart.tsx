import { FC } from "react";
import { IProductDetails } from "types/productsType";
import { IProductShoppingCart } from "types/shoppingCartType";
import { useShoppingCart } from "contexts/ShoppingCartContext";
import styled from "styled-components";
import { addToCart } from "utils/shoppingCart-helper";

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

  const product: IProductShoppingCart = {
    id: productDetails?.id,
    title: productDetails?.title,
    description: productDetails?.body,
    price: productDetails?.price,
    thumbnail: productDetails?.thumbnail.src,
    quantity: 1,
  };

  return (
    <ButtonAddToCart
      onClick={() => addToCart(product, dispatch)}
      disabled={!productDetails}
      className="h-12 rounded-md w-full hover:bg-red-700 transition-all text-white text-2xl"
    >
      Add To Cart
    </ButtonAddToCart>
  );
};

export default ProductDetailAddToCart;
