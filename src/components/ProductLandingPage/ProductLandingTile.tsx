import { FC } from "react";
import ProductLandingTileGallery from "./ProductLandingTileGallery";
import { IProductDetails } from "types/productsType";
import { Link } from "react-router-dom";
import { formatProductTitleForURL } from "utils/productDetailPage-helper";
import styled from "styled-components";

interface IProductTile {
  product: IProductDetails;
}

const ProductTileContainer = styled.div``;

const ProductLandingTile: FC<IProductTile> = ({ product }) => (
  <div className="w-1/2 sm:w-1/2  md:w-1/2 lg:w-1/3 px-4 py-4 lg:px-6 lg:py-6 box-border">
    <ProductTileContainer className="rounded-md overflow-hidden shadow-md bg-white hover:bg-lime-50 transition-all">
      <Link to={`/product/${formatProductTitleForURL(product.title)}`}>
        <ProductLandingTileGallery thumbnail={product.thumbnail} />
        <div className="h-24 p-6 flex items-center justify-center">
          <p className="text-xl md:text-xl lg:text-2xl">{product.title}</p>
        </div>
      </Link>
    </ProductTileContainer>
  </div>
);
export default ProductLandingTile;
