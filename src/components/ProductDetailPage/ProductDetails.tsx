import { FC } from "react";
import { IProductDetails } from "../../types/productsType";
import ProductDetailAddToCart from "./ProductDetailAddToCart";

interface ProductDetailsComponent {
  productDetails?: IProductDetails;
}
const ProductDetails: FC<ProductDetailsComponent> = ({ productDetails }) => {
  return (
    <div className="product-details">
      <h1>{productDetails?.title}</h1>
      <h2>About</h2>
      <p>{productDetails?.body}</p>
      <ProductDetailAddToCart productDetails={productDetails} />
    </div>
  );
};

export default ProductDetails;
