import { FC } from "react";
import ProductTileGallery from "./ProductTileGallery";
import { IProductDetails } from "../../types/productsType";
import { Link } from "react-router-dom";
import { formatProductTitleForURL } from "../../utils/productDetailPage-helper";

interface IProductTile {
  product: IProductDetails;
}
const ProductTile: FC<IProductTile> = ({ product }) => (
  <div className="product-tile">
    <Link to={`/product/${formatProductTitleForURL(product.title)}`}>
      <ProductTileGallery thumbnail={product.thumbnail} />
      <div>{product.title}</div>
    </Link>
  </div>
);
export default ProductTile;
