import React, { useState, useEffect, useContext } from "react";
import { InputLabel } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AlertDialog from "../Components/AlertDialog";
import { CartContext } from "../Context/CartContext";
import axios from "axios";
const ProductDetails = ({ prodDet, showDetail, setShowDetail }) => {
  const { loadItem, setLoadItem } = useContext(CartContext);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [clicked, setClicked] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [rejected, setRejected] = useState(false);
  const addToCart = async () => {
    try {
      await axios.post(`http://localhost:4000/api/Cart/Create`, {
        cartProductId: prodDet.ProductId,
        cartQuantity: quantity,
        cartClientId: prodDet.ClientId,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (confirm === true) {
      addToCart();
      setClicked(false);
      setConfirm(false);
      setShowDetail(false);
      setQuantity(1);
      setLoadItem(!loadItem);
    }
    if (rejected === true) {
      setClicked(false);
      setRejected(false);
    }
  }, [confirm, rejected]);

  return (
    <div>
      <div
        className={
          showDetail === true
            ? "wrap-modal1 js-modal1 p-t-60 p-b-20 show-modal1 "
            : "wrap-modal1 js-modal1 p-t-60 p-b-20"
        }
      >
        <div
          className="overlay-modal1 js-hide-modal1"
          onClick={() => setShowDetail(false)}
        />
        <div className="container">
          <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
            <button
              className="how-pos3 hov3 trans-04 js-hide-modal1"
              onClick={() => setShowDetail(false)}
            >
              <img src="images/icons/icon-close.png" alt="CLOSE" />
            </button>
            <div className="row">
              <div className="col-md-6 col-lg-7 p-b-30">
                <div className="p-l-25 p-r-30 p-lr-0-lg">
                  <div className="wrap-slick3 flex-sb flex-w">
                    <div className="wrap-slick3-arrows flex-sb-m flex-w" />
                    <div className="slick3 gallery-lb">
                      <div className="wrap-pic-w pos-relative">
                        <img src={prodDet.ImgURL} alt="IMG-PRODUCT" />
                        <a
                          className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                          href={prodDet.ImgURL}
                        >
                          <i className="fa fa-expand" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-5 p-b-30">
                <div className="p-r-50 p-t-5 p-lr-0-lg">
                  <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                    {prodDet.Title}
                  </h4>
                  <span className="mtext-106 cl2"> ${prodDet.Price} </span>
                  <p className="stext-102 cl3 p-t-23">{prodDet.Description}</p>
                  <div className="p-t-33">
                    <div className="flex-w flex-r-m p-b-10">
                      <div className="size-203 flex-c-m respon6">Size</div>
                      <div className="size-204 respon6-next">
                        <div className="rs1-select2 bor8 bg0">
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Size
                            </InputLabel>
                            <Select
                              className="js-select2"
                              labelId="demo-simple-select-label"
                              value={size}
                              id="size-select"
                              label="Size"
                              onChange={(e) => setSize(e.target.value)}
                            >
                              {prodDet.Size.map((size, index) => {
                                return (
                                  <MenuItem key={index} value={size}>
                                    Size {size}
                                  </MenuItem>
                                );
                              })}
                            </Select>
                          </FormControl>

                          <div className="dropDownSelect2" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-w flex-r-m p-b-10">
                      <div className="size-203 flex-c-m respon6">Color</div>
                      <div className="size-204 respon6-next">
                        <div className="rs1-select2 bor8 bg0">
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Choose an option
                            </InputLabel>
                            <Select
                              className="js-select2"
                              labelId="demo-simple-select-label"
                              value={color}
                              id="color-select"
                              label="Choose an option"
                              onChange={(e) => setColor(e.target.value)}
                            >
                              {prodDet.Color.map((color, index) => {
                                return (
                                  <MenuItem key={index} value={color}>
                                    {color}
                                  </MenuItem>
                                );
                              })}
                            </Select>
                          </FormControl>

                          <div className="dropDownSelect2" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-w flex-r-m p-b-10">
                      <div className="size-204 flex-w flex-m respon6-next">
                        <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                          <button
                            onClick={() => setQuantity(Number(quantity) - 1)}
                          >
                            <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                              <i className="fs-16 zmdi zmdi-minus" />
                            </div>
                          </button>
                          <input
                            className="mtext-104 cl3 txt-center num-product"
                            type="number"
                            name="num-product"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                          />
                          <button
                            onClick={() => setQuantity(Number(quantity) + 1)}
                          >
                            <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                              <i className="fs-16 zmdi zmdi-plus" />
                            </div>
                          </button>
                        </div>
                        <button
                          className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail"
                          onClick={() => {
                            setClicked(true);
                          }}
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex-w flex-m p-l-100 p-t-40 respon7">
                    <div className="flex-m bor9 p-r-10 m-r-11">
                      <a
                        href="/"
                        className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100"
                        data-tooltip="Add to Wishlist"
                      >
                        <i className="zmdi zmdi-favorite" />
                      </a>
                    </div>
                    <a
                      href="/"
                      className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                      data-tooltip="Facebook"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                    <a
                      href="/"
                      className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                      data-tooltip="Twitter"
                    >
                      <i className="fa fa-twitter" />
                    </a>
                    <a
                      href="/"
                      className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                      data-tooltip="Google Plus"
                    >
                      <i className="fa fa-google-plus" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {clicked && (
        <AlertDialog
          Click="open"
          setConfirm={setConfirm}
          setRejected={setRejected}
        />
      )}
    </div>
  );
};

export default ProductDetails;
