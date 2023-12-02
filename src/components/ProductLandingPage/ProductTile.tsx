import { FC } from "react";
import ProductTileGallery from "./ProductTileGallery";

const ProductTile: FC = () => (
  <div className="product-tile">
    <ProductTileGallery />
    <div>Product Desc</div>
  </div>
);
export default ProductTile;
