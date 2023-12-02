import { FC } from "react";
import Header from "./components/Header/Header";
import ProductLandingPage from "./components/ProductLandingPage";
import ProductDetailPage from "./components/ProductDetailPage";
import ShoppingBag from "./components/ShoppingBag/ShoppingBag";
import { Routes, Route, Navigate } from "react-router-dom";

const App: FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProductLandingPage />} />
        <Route path="/product/:title" element={<ProductDetailPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ShoppingBag />
    </>
  );
};

export default App;
