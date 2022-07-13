import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Layout/Header";
import Cart from "./Layout/Cart";
import Slider1 from "./Layout/Slider";
import Banner from "./Layout/Banner";
import ProductOverview from "./Layout/ProductOverview";
import Footer from "./Layout/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Cart />
        <Slider1 />
        <Banner />
        <ProductOverview />
        <Footer />
      </BrowserRouter>

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={< />} />
          
        </Routes>
      </BrowserRouter> */}
    </div>
  );
};

export default App;
