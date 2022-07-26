import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Home from "./pages/Home";
import ManProds from "./pages/ManProds";
import WomenProds from "./pages/WomenProds";
import Contact from "./pages/Contact";
import About from "./pages/About";
import CartDetail from "./pages/CartDetail";
import Cart from "./Layout/Cart";
import { CartContext } from "./Context/CartContext";

const App = () => {
  const [loadItem, setLoadItem] = useState(false);
  return (
    <div>
      <CartContext.Provider value={{ loadItem, setLoadItem }}>
        <Router>
          <Header />
          <Cart />
          <div style={{ marginTop: "50px" }}></div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*">
              <Route path="ManProducts" element={<ManProds />} />
              <Route path="WomenProducts" element={<WomenProds />} />
              <Route path="Contact" element={<Contact />} />
              <Route path="About" element={<About />} />
              <Route path="CartDetail" element={<CartDetail />} />
            </Route>
          </Routes>
          <Footer />
        </Router>
      </CartContext.Provider>
    </div>
  );
};

export default App;
