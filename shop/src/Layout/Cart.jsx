import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import axios from "axios";
const Cart = () => {
  const { loadItem, setLoadItem } = useContext(CartContext);

  const [isLoading, setIsLoading] = useState(true);
  const [cartList, setCartList] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  var TotalPrice = 0;

  const getCartItems = async () => {
    try {
      const resp = await axios.get(
        "http://localhost:4000/api/Cart/GetCartProudcts/62cbe2120ba004f033b9924f"
      );
      setCartProducts(resp.data.products);
      setCartList(resp.data.carts);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const removeCartItem = (_id) => {
    try {
      axios.get(`http://localhost:4000/api/Cart/Delete/${_id}`);
      getCartItems();
      setLoadItem(!loadItem);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCartItems();
  }, [isLoading, loadItem]);

  return (
    <div>
      {/* Cart */}
      <div className="wrap-header-cart js-panel-cart">
        <div className="s-full js-hide-cart" />
        <div className="header-cart flex-col-l p-l-65 p-r-25">
          <div className="header-cart-title flex-w flex-sb-m p-b-8">
            <span className="mtext-103 cl2">Your Cart</span>
            <div className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">
              <i className="zmdi zmdi-close" />
            </div>
          </div>
          <div className="header-cart-content flex-w js-pscroll">
            <ul className="header-cart-wrapitem w-full">
              {cartList.map((item, index) => {
                TotalPrice += item.Quantity * cartProducts[index].Price;
                return (
                  <li
                    className="header-cart-item flex-w flex-t m-b-12"
                    key={item._id}
                  >
                    <button onClick={() => removeCartItem(item._id)}>
                      <div className="header-cart-item-img">
                        <img src={cartProducts[index].ImgURL} alt="IMG" />
                      </div>
                    </button>
                    <div className="header-cart-item-txt p-t-8">
                      <a
                        href="/"
                        className="header-cart-item-name m-b-18 hov-cl1 trans-04"
                      >
                        {cartProducts[index].Name}
                      </a>
                      <span className="header-cart-item-info">
                        {item.Quantity} x ${cartProducts[index].Price}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="w-full">
              <div className="header-cart-total w-full p-tb-40">
                Total: ${TotalPrice}
              </div>
              <div className="header-cart-buttons flex-w w-full">
                <Link
                  to="CartDetail"
                  className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10"
                >
                  View Cart
                </Link>
                <a
                  href="shoping-cart.html"
                  className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10"
                >
                  Check Out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
