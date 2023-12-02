import { FC } from "react";
import { TProductImages } from "../../types/productsType";

interface IProductDetailsGallery {
  productImages?: TProductImages[];
}
const ProductDetailsGallery: FC<IProductDetailsGallery> = ({
  productImages,
}) => (
  <>
    {
      productImages?.map((item) => (
        <img src={item.src} key={item.id} alt={item.alt ?? ""} />
      ))[0]
    }
  </>
);
export default ProductDetailsGallery;
