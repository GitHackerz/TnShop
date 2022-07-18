import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Home from "./pages/Home";
import ManProds from "./pages/ManProds";
import WomenProds from "./pages/WomenProds";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*">
            <Route path="ManProducts" element={<ManProds />} />
            <Route path="WomenProducts" element={<WomenProds />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
