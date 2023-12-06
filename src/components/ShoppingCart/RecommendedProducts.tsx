import axios from "axios";
import Image from "components/Common/Image";
import { useShoppingCart } from "contexts/ShoppingCartContext";
import { useEffect, useState } from "react";
import { IProductDetails } from "types/productsType";
import { addToCart, buildProductForCart } from "utils/shoppingCart-helper";

const RecommendedProducts = () => {
  const [recommendations, setRecommendations] = useState<IProductDetails[]>();
  useEffect(() => {
    axios
      .get("/api/data.json")
      .then((res) => setRecommendations(res.data.recommendations))
      .catch((err) => console.warn(err));
  }, []);

  const { state, dispatch } = useShoppingCart();
  const productsInCart = state.products;
  const [treesInCartQuantity, setTreesInCartQuantity] = useState<number>(0);
  const [plantingKitInCartQuantity, setPlantingKitInCartQuantity] =
    useState<number>(0);

  useEffect(() => {
    setTreesInCartQuantity(0);
    productsInCart.find((item) =>
      item.productType === "Tree"
        ? setTreesInCartQuantity((prev) => prev + (item.quantity ?? 0))
        : null
    );

    setPlantingKitInCartQuantity(0);
    productsInCart.find((item) =>
      item.title === "Tree Planting Kit"
        ? setPlantingKitInCartQuantity((prev) => prev + (item.quantity ?? 0))
        : null
    );
  }, [productsInCart, setTreesInCartQuantity, setPlantingKitInCartQuantity]);

  return (
    <div className="recommended-items">
      <h3 className="font-medium py-6 text-2xl">Recommended Items</h3>
      {recommendations?.map((rec) => {
        const product = buildProductForCart(rec);

        const removeRec = productsInCart.find((prod) => prod.id === rec.id);

        const showTreeKit =
          removeRec?.title === "Tree Planting Kit" &&
          treesInCartQuantity > plantingKitInCartQuantity;

        return !removeRec || showTreeKit ? (
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
              <Image
                imageUrl="/images/plus-circle.svg"
                altText="Add Quantity"
                style={{ width: "36px" }}
              />
            </button>
          </div>
        ) : (
          <div className="py-3 px-6">
            <p className="font-bold text-sm">Added to cart!</p> {product.title}
          </div>
        );
      })}
    </div>
  );
};

export default RecommendedProducts;
