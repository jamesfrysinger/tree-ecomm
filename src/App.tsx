import { FC } from "react";
import Header from "./components/Header/Header";
import ProductLandingPage from "./components/ProductLandingPage";
import ProductDetailPage from "./components/ProductDetailPage";
import ShoppingBag from "./components/ShoppingBag/ShoppingBag";
import { Routes, Route, Navigate } from "react-router-dom";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";
import "./index.css";

const App: FC = () => {
  return (
    <ShoppingCartProvider>
      <Header />
      <div className="flex justify-center mx-6">
        <Routes>
          <Route path="/" element={<ProductLandingPage />} />
          <Route path="/product/:title" element={<ProductDetailPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <ShoppingBag />
    </ShoppingCartProvider>
  );
};

export default App;
