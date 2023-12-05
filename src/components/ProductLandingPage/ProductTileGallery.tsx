import Image from "components/Common/Image";
import { FC } from "react";
import { IProductThumbnail } from "types/productsType";

interface IProductTileGallery {
  thumbnail: IProductThumbnail;
}

const ProductTileGallery: FC<IProductTileGallery> = ({ thumbnail }) => (
  <Image
    imageUrl={thumbnail.src}
    altText={thumbnail.alt}
    width="100%"
    placeholderUrl={"/images/placeholder-image.jpg"}
  />
);

export default ProductTileGallery;
