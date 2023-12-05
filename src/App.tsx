import { FC } from "react";
import ProductLandingPage from "./pages/ProductLandingPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ShoppingCart from "./pages/ShoppingCart";
import { Routes, Route, Navigate } from "react-router-dom";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";
import "./index.css";
import Header from "components/Header";

const App: FC = () => {
  return (
    <div className="flex justify-center">
      <div className="container">
        <ShoppingCartProvider>
          <Header />
          <div className="flex ">
            <Routes>
              <Route path="/" element={<ProductLandingPage />} />
              <Route path="/product/:title" element={<ProductDetailPage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
          <ShoppingCart />
        </ShoppingCartProvider>
      </div>
    </div>
  );
};

export default App;
