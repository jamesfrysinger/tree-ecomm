import { FC } from "react";
import { IProductDetails } from "types/productsType";
import ProductDetailAddToCart from "./ProductDetailAddToCart";

interface ProductDetailsComponent {
  productDetails?: IProductDetails;
}

const ProductDetails: FC<ProductDetailsComponent> = ({ productDetails }) => {
  return (
    (productDetails && (
      <div className="w-full lg:w-2/5 self-start rounded-b-md lg:rounded-t-md bg-white px-6 py-6 space-y-4">
        <h1 className="text-4xl font-medium">{productDetails?.title}</h1>
        <h2 className="font-medium">About</h2>
        <p>{productDetails?.body}</p>
        <ProductDetailAddToCart productDetails={productDetails} />
      </div>
    )) ?? <></>
  );
};

export default ProductDetails;
