import { FC } from "react";
import ProductTileGallery from "./ProductTileGallery";
import { IProductDetails } from "../../types/productsType";
interface IProductTile {
  product: IProductDetails;
}
const ProductTile: FC<IProductTile> = ({ product }) => (
  <div className="product-tile">
    <ProductTileGallery thumbnail={product.thumbnail} />
    <div>{product.title}</div>
  </div>
);
export default ProductTile;
