import React, { useState, useEffect } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cartList, setCartList] = useState([]);

  const getCartItems = () => {
    fetch(
      "http://localhost:4000/api/Cart/GetCartProudcts/62cbe2120ba004f033b9924f"
    )
      .then((res) => res.json())
      .then((data) => {
        setCartItems(data.products);
        setCartList(data.carts);
        setIsLoading(false);
      });
  };

  const removeCartItem = (_id) => {
    fetch(`http://localhost:4000/api/Cart/Delete/${_id}`)
      .then((res) => res.json())
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
   if(!isLoading) getCartItems();
  }, [isLoading]);
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
                getCartItems(item.ProductId);
                return (
                  <li
                    className="header-cart-item flex-w flex-t m-b-12"
                    key={item._id}
                  >
                    <button onClick={() => removeCartItem(item._id)}>
                      <div className="header-cart-item-img">
                        <img src="images/item-cart-01.jpg" alt="IMG" />
                      </div>
                    </button>
                    <div className="header-cart-item-txt p-t-8">
                      <a
                        href="/"
                        className="header-cart-item-name m-b-18 hov-cl1 trans-04"
                      >
                        {cartItems[index].Name}
                      </a>
                      <span className="header-cart-item-info">
                        {item.Quantity} x ${cartItems[index].Price}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="w-full">
              <div className="header-cart-total w-full p-tb-40">
                Total: $75.00
              </div>
              <div className="header-cart-buttons flex-w w-full">
                <a
                  href="shoping-cart.html"
                  className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10"
                >
                  View Cart
                </a>
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
