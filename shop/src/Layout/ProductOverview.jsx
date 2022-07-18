import React, { useState, useEffect } from "react";
import Product from "../Components/Product";
import ProductDetails from "../Components/ProductDetails";
const ProductOverview = () => {
  const [prodDet, setProdDet] = useState({
    Title: "None Title",
    Price: "NaN",
    ImgURL: "NoneImg",
    Size: [],
    Color: [],
    Description: "NoneDesc",
    ClientId: "",
    ProductId: "",
  });
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isShow, setIsShow] = useState(false);
  const [quantity, setQuantity] = React.useState(0);
  
  const getProductsList = async () => {
    await fetch("http://localhost:4000/api/Product/List")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProductsList();
    setFilteredProducts(products);
  }, [isLoading]);

  useEffect(() => {
    if (prodDet.Size.length > 0) setIsShow(true);
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
            {/* Filter */}
            <div className="dis-none panel-filter w-full p-t-10">
              <div className="wrap-filter flex-w bg6 w-full p-lr-40 p-t-27 p-lr-15-sm">
                <div className="filter-col1 p-r-15 p-b-27">
                  <div className="mtext-102 cl2 p-b-15">Sort By</div>
                  <ul>
                    <li className="p-b-6">
                      <a href="/" className="filter-link stext-106 trans-04">
                        Default
                      </a>
                    </li>
                    <li className="p-b-6">
                      <a href="/" className="filter-link stext-106 trans-04">
                        Popularity
                      </a>
                    </li>
                    <li className="p-b-6">
                      <a href="/" className="filter-link stext-106 trans-04">
                        Average rating
                      </a>
                    </li>
                    <li className="p-b-6">
                      <a
                        href="/"
                        className="filter-link stext-106 trans-04 filter-link-active"
                      >
                        Newness
                      </a>
                    </li>
                    <li className="p-b-6">
                      <a href="/" className="filter-link stext-106 trans-04">
                        Price: Low to High
                      </a>
                    </li>
                    <li className="p-b-6">
                      <a href="/" className="filter-link stext-106 trans-04">
                        Price: High to Low
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="filter-col2 p-r-15 p-b-27">
                  <div className="mtext-102 cl2 p-b-15">Price</div>
                  <ul>
                    <li className="p-b-6">
                      <a
                        href="/"
                        className="filter-link stext-106 trans-04 filter-link-active"
                      >
                        All
                      </a>
                    </li>
                    <li className="p-b-6">
                      <a href="/" className="filter-link stext-106 trans-04">
                        $0.00 - $50.00
                      </a>
                    </li>
                    <li className="p-b-6">
                      <a href="/" className="filter-link stext-106 trans-04">
                        $50.00 - $100.00
                      </a>
                    </li>
                    <li className="p-b-6">
                      <a href="/" className="filter-link stext-106 trans-04">
                        $100.00 - $150.00
                      </a>
                    </li>
                    <li className="p-b-6">
                      <a href="/" className="filter-link stext-106 trans-04">
                        $150.00 - $200.00
                      </a>
                    </li>
                    <li className="p-b-6">
                      <a href="/" className="filter-link stext-106 trans-04">
                        $200.00+
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="filter-col3 p-r-15 p-b-27">
                  <div className="mtext-102 cl2 p-b-15">Color</div>
                  <ul>
                    <li className="p-b-6">
                      <span
                        className="fs-15 lh-12 m-r-6"
                        style={{ color: "/222" }}
                      >
                        <i className="zmdi zmdi-circle" />
                      </span>
                      <a href="/" className="filter-link stext-106 trans-04">
                        Black
                      </a>
                    </li>
                    <li className="p-b-6">
                      <span
                        className="fs-15 lh-12 m-r-6"
                        style={{ color: "/4272d7" }}
                      >
                        <i className="zmdi zmdi-circle" />
                      </span>
                      <a
                        href="/"
                        className="filter-link stext-106 trans-04 filter-link-active"
                      >
                        Blue
                      </a>
                    </li>
                    <li className="p-b-6">
                      <span
                        className="fs-15 lh-12 m-r-6"
                        style={{ color: "/b3b3b3" }}
                      >
                        <i className="zmdi zmdi-circle" />
                      </span>
                      <a href="/" className="filter-link stext-106 trans-04">
                        Grey
                      </a>
                    </li>
                    <li className="p-b-6">
                      <span
                        className="fs-15 lh-12 m-r-6"
                        style={{ color: "/00ad5f" }}
                      >
                        <i className="zmdi zmdi-circle" />
                      </span>
                      <a href="/" className="filter-link stext-106 trans-04">
                        Green
                      </a>
                    </li>
                    <li className="p-b-6">
                      <span
                        className="fs-15 lh-12 m-r-6"
                        style={{ color: "/fa4251" }}
                      >
                        <i className="zmdi zmdi-circle" />
                      </span>
                      <a href="/" className="filter-link stext-106 trans-04">
                        Red
                      </a>
                    </li>
                    <li className="p-b-6">
                      <span
                        className="fs-15 lh-12 m-r-6"
                        style={{ color: "/aaa" }}
                      >
                        <i className="zmdi zmdi-circle-o" />
                      </span>
                      <a href="/" className="filter-link stext-106 trans-04">
                        White
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="filter-col4 p-b-27">
                  <div className="mtext-102 cl2 p-b-15">Tags</div>
                  <div className="flex-w p-t-4 m-r--5">
                    <a
                      href="/"
                      className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Fashion
                    </a>
                    <a
                      href="/"
                      className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Lifestyle
                    </a>
                    <a
                      href="/"
                      className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Denim
                    </a>
                    <a
                      href="/"
                      className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Streetstyle
                    </a>
                    <a
                      href="/"
                      className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Crafts
                    </a>
                  </div>
                </div>
              </div>
            </div>
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
        Title={prodDet.Title}
        isShow={isShow}
        setIsShow={setIsShow}
        Price={prodDet.Price}
        ImgURL={prodDet.ImgURL}
        Size={prodDet.Size}
        Color={prodDet.Color}
        ProductId={prodDet.ProductId}
        ClientId={prodDet.ClientId}
        Description={"Description"}
      />
    </div>
  );
};

export default ProductOverview;
