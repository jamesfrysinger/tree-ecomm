import { FC } from "react";

const App: FC = () => {
  return (
    <>
      <header>
        <nav></nav>
      </header>
      <main>
        {/* Product Landing Page */}
        <section className="product-landing-page">
          <div className="product-tile">
            <img alt="" />
            <div>Product Desc</div>
          </div>
          <div className="product-tile">
            <img alt="" />
            <div>Product Desc</div>
          </div>
          <div className="product-tile">
            <img alt="" />
            <div>Product Desc</div>
          </div>
          <div className="product-tile">
            <img alt="" />
            <div>Product Desc</div>
          </div>
          <div className="product-tile">
            <img alt="" />
            <div>Product Desc</div>
          </div>
          <div className="product-tile">
            <img alt="" />
            <div>Product Desc</div>
          </div>
        </section>
        {/* Product Detail Page */}
        <section className="product-detail-page">
          <img alt="" />
          <div className="product-details">
            Product Details <button>Add To Cart</button>
          </div>
        </section>
        {/* Shopping Bag */}
        <section className="shopping-bag">Shopping Bag</section>
      </main>
    </>
  );
};

export default App;
