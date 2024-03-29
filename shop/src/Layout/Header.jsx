import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const Header = () => {
  const [cartNum, setCartNum] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { loadItem } = useContext(CartContext);

  const getCartNum = () => {
    fetch(
      `http://localhost:4000/api/Cart/GetCartNumbers/62cbe2120ba004f033b9924f`
    )
      .then((res) => res.json())
      .then((data) => {
        setCartNum(data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getCartNum();
  }, [loadItem, isLoading]);

  return (
    <div>
      <header>
        {/* Header desktop */}
        <div className="container-menu-desktop fix-menu-desktop">
          {/* Topbar */}
          <div className="top-bar">
            <div className="content-topbar flex-sb-m h-full container">
              <div className="left-top-bar">
                Free shipping for standard order over $100
              </div>
              <div className="right-top-bar flex-w h-full">
                <a href="/" className="flex-c-m trans-04 p-lr-25">
                  Help &amp; FAQs
                </a>
                <a href="/" className="flex-c-m trans-04 p-lr-25">
                  My Account
                </a>
                <a href="/" className="flex-c-m trans-04 p-lr-25">
                  EN
                </a>
                <a href="/" className="flex-c-m trans-04 p-lr-25">
                  USD
                </a>
              </div>
            </div>
          </div>
          <div className="wrap-menu-desktop how-shadow1 fix-menu-desktop">
            <nav className="limiter-menu-desktop container">
              {/* Logo desktop */}
              {/* <img src="images/icons/logo-01.png" alt="IMG-LOGO" /> */}
              <div
                className="logo"
                style={{
                  fontWeight: "bold",
                  fontSize: "25px",
                  fontFamily: "Roboto, sans-serif",
                }}
              >
                <span style={{ color: "#E63333" }}>TN</span>&nbsp;Shop
              </div>
              {/* Menu desktop */}
              <div className="menu-desktop">
                <ul className="main-menu">
                  <li>
                    <NavLink
                      className={(navData) =>
                        navData.isActive ? "active-menu" : ""
                      }
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={(navData) =>
                        navData.isActive ? "active-menu" : ""
                      }
                      to="/Product"
                    >
                      Shop
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={(navData) =>
                        navData.isActive ? "active-menu" : ""
                      }
                      to="About"
                    >
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={(navData) =>
                        navData.isActive ? "active-menu" : ""
                      }
                      to="Contact"
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
              {/* Icon header */}
              <div className="wrap-icon-header flex-w flex-r-m">
                <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                  <i className="zmdi zmdi-search"></i>
                </div>

                <div
                  className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart"
                  data-notify={cartNum}
                >
                  <i className="zmdi zmdi-shopping-cart"></i>
                </div>

                <a
                  href="/"
                  className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti"
                  data-notify="0"
                >
                  <i className="zmdi zmdi-favorite-outline"></i>
                </a>
              </div>
            </nav>
          </div>
        </div>
        {/* Header Mobile */}
        <div className="wrap-header-mobile">
          {/* Logo moblie */}
          <div className="logo-mobile">
            <a href="index.html">
              <img src="images/icons/logo-01.png" alt="IMG-LOGO" />
            </a>
          </div>
          {/* Icon header */}
          <div className="wrap-icon-header flex-w flex-r-m">
            <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
              <i className="zmdi zmdi-search" />
            </div>
            <div
              className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart"
              data-notify="2"
            >
              <i className="zmdi zmdi-shopping-cart"></i>
            </div>
            <a
              href="/"
              className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti"
              data-notify="0"
            >
              <i className="zmdi zmdi-favorite-outline" />
            </a>
          </div>

          {/* Button show menu */}
          <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </div>
        </div>
        {/* Menu Mobile */}
        <div className="menu-mobile">
          <ul className="topbar-mobile">
            <li>
              <div className="left-top-bar">
                Free shipping for standard order over $100
              </div>
            </li>
            <li>
              <div className="right-top-bar flex-w h-full">
                <a href="/" className="flex-c-m p-lr-10 trans-04">
                  Help &amp; FAQs
                </a>
                <a href="/" className="flex-c-m p-lr-10 trans-04">
                  My Account
                </a>
                <a href="/" className="flex-c-m p-lr-10 trans-04">
                  EN
                </a>
                <a href="/" className="flex-c-m p-lr-10 trans-04">
                  USD
                </a>
              </div>
            </li>
          </ul>
          <ul className="main-menu-m">
            <li>
              <a href="index.html">Home</a>
              <ul className="sub-menu-m">
                <li>
                  <a href="index.html">Homepage 1</a>
                </li>
                <li>
                  <a href="home-02.html">Homepage 2</a>
                </li>
                <li>
                  <a href="home-03.html">Homepage 3</a>
                </li>
              </ul>
              <span className="arrow-main-menu-m">
                <i className="fa fa-angle-right" aria-hidden="true" />
              </span>
            </li>
            <li>
              <a href="product.html">Shop</a>
            </li>
            <li>
              <a
                href="shoping-cart.html"
                className="label1 rs1"
                data-label1="hot"
              >
                Features
              </a>
            </li>
            <li>
              <a href="blog.html">Blog</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
        {/* Modal Search */}
        <div className="modal-search-header flex-c-m trans-04 js-hide-modal-search">
          <div className="container-search-header">
            <button className="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
              <img src="images/icons/icon-close2.png" alt="CLOSE" />
            </button>
            <form className="wrap-search-header flex-w p-l-15">
              <button className="flex-c-m trans-04">
                <i className="zmdi zmdi-search" />
              </button>
              <input
                className="plh3"
                type="text"
                name="search"
                placeholder="Search..."
              />
            </form>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
