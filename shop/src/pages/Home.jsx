import React, { useState } from "react";
import Banner from "../Layout/Banner";
import Cart from "../Layout/Cart";
import ProductOverview from "../Layout/ProductOverview";
import MainSlider from "../Layout/MainSlider";

const Home = () => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div>
      <MainSlider />
      <Banner />
      <ProductOverview showDetail={showDetail} setShowDetail={setShowDetail} />
    </div>
  );
};

export default Home;
