import { FC } from "react";
import { IProductThumbnail } from "../../types/productsType";

interface IProductTileGallery {
  thumbnail: IProductThumbnail;
}

const ProductTileGallery: FC<IProductTileGallery> = ({ thumbnail }) => (
  <img src={thumbnail.src} alt="" />
);

export default ProductTileGallery;
