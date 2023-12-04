import { FC } from "react";
import ProductTileGallery from "./ProductTileGallery";
import { IProductDetails } from "types/productsType";
import { Link } from "react-router-dom";
import { formatProductTitleForURL } from "utils/productDetailPage-helper";
import styled from "styled-components";

interface IProductTile {
  product: IProductDetails;
}

const ProductTileContainer = styled.div`
  background: var(--color-bg-white);
  div {
    align-items: center;
    text-align: center;
  }
`;

const ProductTile: FC<IProductTile> = ({ product }) => (
  <div className="sm:w-1/2 sm:px-3 sm:py-3 md:w-1/2 md:px-3 md:py-3 lg:w-1/3 lg:px-6 lg:py-6 box-border">
    <ProductTileContainer className="rounded-lg overflow-hidden shadow-md">
      <Link to={`/product/${formatProductTitleForURL(product.title)}`}>
        <ProductTileGallery thumbnail={product.thumbnail} />
        <div className="h-24 flex p-6">
          <p>{product.title}</p>
        </div>
      </Link>
    </ProductTileContainer>
  </div>
);
export default ProductTile;
