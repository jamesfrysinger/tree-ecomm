import { FC } from "react";
import { IProductDetails } from "../../types/productsType";

interface ProductDetailsComponent {
  productDetails?: IProductDetails;
}
const ProductDetails: FC<ProductDetailsComponent> = ({ productDetails }) => (
  <div className="product-details">
    <h1>{productDetails?.title}</h1>
    <h2>About</h2>
    <p>{productDetails?.body}</p>
    <button>Add To Cart</button>
  </div>
);

export default ProductDetails;
