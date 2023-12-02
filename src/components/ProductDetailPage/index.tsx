import { FC, useEffect, useState } from "react";
import ProductDetails from "./ProductDetails";
import axios from "axios";
import { IProduct } from "../../types/productsType";
import { useParams } from "react-router-dom";
import { formatProductTitleForURL } from "../../utils/productDetailPage-helper";

const ProductDetailPage: FC = () => {
  const { title } = useParams();
  const [productDetails, setProductDetails] = useState<IProduct>();

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/data.json")
      .then((res) => setProductDetails(res.data))
      .catch((err) => console.warn(err));
  }, []);

  console.log(
    productDetails?.products.filter(
      (product) => formatProductTitleForURL(product.title) === title
    )
  );

  return (
    <section className="product-detail-page">
      <img alt="" />
      <ProductDetails />
    </section>
  );
};

export default ProductDetailPage;
