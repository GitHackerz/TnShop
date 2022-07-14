import { Paper } from "@mui/material";
import React from "react";

const Product = (props) => {

  const showDetails = async () => {
    await props.setProdDet({
      Title: props.Title,
      Price: props.Price,
      ImgURL: props.ImgURL,
      Size: ["S", "M", "L", "XL"],
      Color: ["Red", "Blue", "Green", "Yellow"],
      Description: "NoneDesc",
    });
  };

  return (
    <div>
      <Paper
        elevation={10}
        className="rounderd"
        style={{ borderRadius: "15px", padding: "10px" }}
      >
        <div className="block2">
          <div className="block2-pic hov-img0">
            <img
              src={props.ImgURL}
              alt="IMG-PRODUCT"
              style={{ borderRadius: "15px" }}
            />
            <a
              className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
              onClick={showDetails}
            >
              Quick View
            </a>
          </div>
          <div className="block2-txt flex-w flex-t p-t-14">
            <div className="block2-txt-child1 flex-col-l">
              <a
                href="product-detail.html"
                className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
              >
                {props.Title}
              </a>
              <span className="stext-105 cl3"> ${props.Price} </span>
            </div>
            <div className="block2-txt-child2 flex-r p-t-3">
              <a
                href="/"
                className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
              >
                <img
                  className="icon-heart1 dis-block trans-04"
                  src="images/icons/icon-heart-01.png"
                  alt="ICON"
                />
                <img
                  className="icon-heart2 dis-block trans-04 ab-t-l"
                  src="images/icons/icon-heart-02.png"
                  alt="ICON"
                />
              </a>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Product;
