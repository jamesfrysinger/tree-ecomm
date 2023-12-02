import { FC } from "react";
import Header from "./components/Header/Header";
import ProductLandingPage from "./components/ProductLandingPage";
import ProductDetailPage from "./components/ProductDetailPage";
import ShoppingBag from "./components/ShoppingBag/ShoppingBag";
import { Routes, Route } from "react-router-dom";

const App: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<ProductLandingPage />} />
          <Route path="/product" element={<ProductDetailPage />} />
        </Routes>
        <ShoppingBag />
      </main>
    </>
  );
};

export default App;
