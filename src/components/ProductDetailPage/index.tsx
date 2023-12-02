import { FC, useEffect, useState } from "react";
import ProductDetails from "./ProductDetails";
import axios from "axios";
import { IProductDetails } from "../../types/productsType";
import { useParams } from "react-router-dom";
import { formatProductTitleForURL } from "../../utils/productDetailPage-helper";
import ProductDetailsGallery from "./ProductDetailsGallery";

const ProductDetailPage: FC = () => {
  const { title } = useParams();
  const [productDetails, setProductDetails] = useState<IProductDetails>();

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/data.json")
      .then((res) =>
        setProductDetails(
          res.data.products.filter(
            (product: IProductDetails) =>
              formatProductTitleForURL(product.title) === title
          )[0]
        )
      )
      .catch((err) => console.warn(err));
  }, [title]);

  return (
    <section className="product-detail-page">
      <ProductDetailsGallery productImages={productDetails?.images} />
      <ProductDetails productDetails={productDetails} />
    </section>
  );
};

export default ProductDetailPage;
