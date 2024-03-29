import { FC, useEffect, useState } from "react";
import ProductLandingTile from "../components/ProductLandingPage/ProductLandingTile";
import axios from "axios";
import { IProduct } from "types/productsType";

const ProductLandingPage: FC = () => {
  const [products, setProducts] = useState<IProduct>();
  useEffect(() => {
    axios
      .get("/api/data.json")
      .then((res) => setProducts(res.data))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <section className="flex flex-wrap">
      {products?.products.map((product) => (
        <ProductLandingTile product={product} key={product.id} />
      ))}
    </section>
  );
};

export default ProductLandingPage;
