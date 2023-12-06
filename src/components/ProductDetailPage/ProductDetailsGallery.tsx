import Image from "components/Common/Image";
import { FC } from "react";
import { TProductImages } from "types/productsType";

interface IProductDetailsGallery {
  productImages?: TProductImages[];
}

const ProductDetailsGallery: FC<IProductDetailsGallery> = ({
  productImages,
}) => (
  <div className="w-full lg:w-3/5 rounded-t-md lg:rounded-b-md overflow-hidden self-start">
    {
      productImages?.map((item) => (
        <Image
          key={item.id}
          imageUrl={item.src}
          altText={item.alt}
          width="100%"
          placeholderUrl={"/images/placeholder-image.jpg"}
        />
      ))[0]
    }
  </div>
);
export default ProductDetailsGallery;
