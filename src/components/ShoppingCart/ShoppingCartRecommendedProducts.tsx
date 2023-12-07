import axios from "axios";
import Button from "components/Common/Button";
import Image from "components/Common/Image";
import { useShoppingCart } from "contexts/ShoppingCartContext";
import { useEffect, useState } from "react";
import { IProductDetails } from "types/productsType";
import {
  addToCart,
  buildProductForCart,
  matchProductAndRecQuantityInCart,
  removeFromCart,
} from "utils/shoppingCart-helper";

const ShoppingCartRecommendedProducts = () => {
  const { state, dispatch } = useShoppingCart();
  const [recommendations, setRecommendations] = useState<IProductDetails[]>();
  useEffect(() => {
    axios
      .get("/api/data.json")
      .then((res) => setRecommendations(res.data.recommendations))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <div className="recommended-items">
      <h3 className="font-medium py-6 text-2xl">Recommended Items</h3>
      {recommendations?.map((rec) => {
        const product = buildProductForCart(rec);

        const recommendationIsInCart = state.products.find(
          (prod) => prod.id === rec.id
        );

        return !recommendationIsInCart ||
          matchProductAndRecQuantityInCart(
            state.products,
            {
              productType: "Tree",
              rec: "Tree Planting Kit",
            },
            rec.title
          ) ? (
          <div
            className="flex items-center justify-evenly py-6 px-6"
            key={product.id}
          >
            <Image
              imageUrl={rec.thumbnail.src}
              altText={rec.title}
              placeholderUrl="/images/placeholder-image.jpg"
              style={{ width: "110px" }}
              className="w-1/4 pr-3"
            />
            <p className="w-2/4 text-xl font-semibold pr-6">{rec.title}</p>
            <Button
              className="w-1/4 flex-shrink-0"
              imageUrl="/images/plus-circle.svg"
              altText="Add Quantity"
              onClick={() => addToCart(product, dispatch)}
              imageStyle={{ width: "36px" }}
            />
          </div>
        ) : (
          <div className="py-3 px-6" key={product.id}>
            <div className="w-full">
              <p className="font-bold text-sm">Added to cart!</p>
              {product.title}
            </div>
            <Button
              className="text-sm text-red-600"
              onClick={() => removeFromCart(product.id, dispatch)}
            >
              Undo
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default ShoppingCartRecommendedProducts;
