import { FC } from "react";
import Header from "./components/Header/Header";
import ProductLandingPage from "./components/ProductLandingPage";
import ProductDetailPage from "./components/ProductDetailPage";
import ShoppingBag from "./components/ShoppingBag/ShoppingBag";

const App: FC = () => {
  return (
    <>
      <Header />
      <main>
        <ProductLandingPage />
        <ProductDetailPage />
        <ShoppingBag />
      </main>
    </>
  );
};

export default App;
