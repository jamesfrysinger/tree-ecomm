import { FC } from "react";
import { IProductDetails } from "types/productsType";
import ProductDetailAddToCart from "./ProductDetailAddToCart";
import styled from "styled-components";

interface ProductDetailsComponent {
  productDetails?: IProductDetails;
}

const ProductDetails: FC<ProductDetailsComponent> = ({ productDetails }) => {
  return (
    <div className="w-full lg:w-2/5 self-start rounded-b-lg lg:rounded-t-lg bg-white px-6 py-6 space-y-4">
      <h1 className="text-4xl font-medium">{productDetails?.title}</h1>
      <h2 className="font-medium">About</h2>
      <p>{productDetails?.body}</p>
      <ProductDetailAddToCart productDetails={productDetails} />
    </div>
  );
};

export default ProductDetails;
