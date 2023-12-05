import axios from "axios";
import Image from "components/Common/Image";
import { useShoppingCart } from "contexts/ShoppingCartContext";
import { useEffect, useState } from "react";
import { IProduct } from "types/productsType";
import { IProductShoppingCart } from "types/shoppingCartType";
import { addToCart } from "utils/shoppingCart-helper";

const RecommendedProducts = () => {
  const [recommendations, setRecommendations] = useState<IProduct>();
  useEffect(() => {
    axios
      .get("/api/data.json")
      .then((res) => setRecommendations(res.data))
      .catch((err) => console.warn(err));
  }, []);

  const { state, dispatch } = useShoppingCart();

  return (
    <div className="recommended-items">
      {recommendations?.recommendations.map((rec) => {
        const product: IProductShoppingCart = {
          id: rec?.id,
          title: rec?.title,
          description: rec?.body,
          price: rec?.price,
          thumbnail: rec?.thumbnail.src,
          quantity: 1,
        };
        const productIsInCart = state.products.find(
          (prod) => prod.id === rec.id
        );

        return (
          !productIsInCart && (
            <div className="flex items-center justify-evenly py-6 px-6">
              <Image
                imageUrl={rec.thumbnail.src}
                altText={rec.title}
                placeholderUrl="/images/placeholder-image.jpg"
                style={{ width: "110px" }}
                className="w-1/4 pr-3"
              />
              <p className="w-2/4 text-xl font-semibold">{rec.title}</p>
              <button
                className="w-1/4"
                onClick={() => addToCart(product, dispatch)}
              >
                +
              </button>
            </div>
          )
        );
      })}
    </div>
  );
};

export default RecommendedProducts;
