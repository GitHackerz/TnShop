import React, { useState, useEffect, useContext } from "react";
import Filter from "../Components/Filter";
import Product from "../Components/Product";
import ProductDetails from "../Components/ProductDetails";
import { CartContext } from "../Context/CartContext";
import Cart from "./Cart";

const ProductOverview = ({ showDetail, setShowDetail }) => {
  const { loadItem } = useContext(CartContext);

  const [prodDet, setProdDet] = useState({
    Title: "",
    Price: "",
    ImgURL: "",
    Size: [],
    Color: [],
    Description: "",
    ClientId: "",
    ProductId: "",
    Description: "",
  });
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getProductsList = async () => {
    await fetch("http://localhost:4000/api/Product/List")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProductsList();
    setFilteredProducts(products);
  }, [isLoading, loadItem]);

  useEffect(() => {
    if (prodDet.Size.length > 0) setShowDetail(true);
  }, [prodDet]);

  return (
    <div>
      <section className="bg0 p-t-23 p-b-140">
        <div className="container">
          <div className="p-b-10">
            <h3 className="ltext-103 cl5">Product Overview</h3>
          </div>
          <div className="flex-w flex-sb-m p-b-52">
            <div className="flex-w flex-l-m filter-tope-group m-tb-10">
              <button
                className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1"
                onClick={() => {
                  getProductsList();
                  setFilteredProducts(products);
                }}
              >
                All Products
              </button>
              <button
                className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                onClick={() => {
                  setFilteredProducts(
                    products.filter((product) => product.Type === "Women")
                  );
                }}
              >
                Women
              </button>
              <button
                className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                onClick={() => {
                  setFilteredProducts(
                    products.filter((product) => product.Type === "Men")
                  );
                }}
              >
                Men
              </button>
              <button
                className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                onClick={() => {
                  setFilteredProducts(
                    products.filter(
                      (product) => product.Type === "AccessoriesMen"
                    )
                  );
                }}
              >
                Accessories For Men
              </button>
              <button
                className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                onClick={async () => {
                  setFilteredProducts(
                    products.filter(
                      (product) => product.Type === "AccessoriesWomen"
                    )
                  );
                }}
              >
                Accessories For Women
              </button>
            </div>
            <div className="flex-w flex-c-m m-tb-10">
              <div className="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter">
                <i className="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list" />
                <i className="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none" />
                Filter
              </div>
              <div className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search">
                <i className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search" />
                <i className="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none" />
                Search
              </div>
            </div>
            {/* Search product */}
            <div className="dis-none panel-search w-full p-t-10 p-b-15">
              <div className="bor8 dis-flex p-l-15">
                <button className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
                  <i className="zmdi zmdi-search" />
                </button>
                <input
                  className="mtext-107 cl2 size-114 plh2 p-r-15"
                  type="text"
                  name="search-product"
                  placeholder="Search"
                />
              </div>
            </div>
            <Filter />
          </div>
          <div className="row ">
            {/* Block2 */}
            {filteredProducts.map((product) => {
              return (
                <div
                  className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item"
                  key={product._id}
                >
                  <Product
                    productId={product._id}
                    clientId="62cbe2120ba004f033b9924f"
                    Title={product.Name}
                    Price={product.Price}
                    ImgURL={product.ImgURL}
                    setProdDet={setProdDet}
                  ></Product>
                </div>
              );
            })}
          </div>
          {/* Load more */}
          <div className="flex-c-m flex-w w-full p-t-45">
            <a
              href="/"
              className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04"
            >
              Load More
            </a>
          </div>
        </div>
      </section>

      <ProductDetails
        showDetail={showDetail}
        setShowDetail={setShowDetail}
        prodDet={prodDet}
      />
    </div>
  );
};

export default ProductOverview;
