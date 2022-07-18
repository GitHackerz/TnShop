import React from "react";
import Banner from "../Layout/Banner";
import Cart from "../Layout/Cart";
import ProductOverview from "../Layout/ProductOverview";
import MainSlider from "../Layout/MainSlider";

const Home = () => {
  return (
    <div>
      <Cart />
      <MainSlider />
      <Banner />
      <ProductOverview />
    </div>
  );
};

export default Home;
