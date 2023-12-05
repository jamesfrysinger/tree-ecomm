import { FC } from "react";
import ProductLandingPage from "./pages/ProductLandingPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ShoppingBag from "./components/ShoppingBag/ShoppingBag";
import { Routes, Route, Navigate } from "react-router-dom";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";
import "./index.css";
import Header from "components/Header";

const App: FC = () => {
  return (
    <ShoppingCartProvider>
      <Header />
      <div className="flex justify-center">
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
