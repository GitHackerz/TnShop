import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../Context/CartContext";

var Quantity = [];
const CartDetail = () => {
  const { loadItem, setLoadItem } = useContext(CartContext);

  const [cartProducts, setCartProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cartList, setCartList] = useState([]);

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

  const deleteCartItem = async (_id) => {
    try {
      await axios.get(`http://localhost:4000/api/Cart/Delete/${_id}`);
      setLoadItem(!loadItem);
    } catch (err) {
      console.log(err);
    }
  };

  const UpdateQuantity = async (quantity, _id) => {
    try {
      await axios.post("http://localhost:4000/api/Cart/UpdateCart", {
        cartProductId: _id,
        cartClientId: "62cbe2120ba004f033b9924f",
        cartQuantity: quantity,
      });

      await setLoadItem(!loadItem);
    } catch (err) {
      console.log(err);
    }
  };

  const SyncedFN = async () => {
    await getCartItems();
    Quantity = [];
    cartList.map((item) => Quantity.push(item.Quantity));
  };

  useEffect(() => {
    SyncedFN();
  }, [isLoading, loadItem]);

  return (
    <div>
      <div>
        {/* breadcrumb */}
        <div className="container">
          <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
            <a href="index.html" className="stext-109 cl8 hov-cl1 trans-04">
              Home
              <i
                className="fa fa-angle-right m-l-9 m-r-10"
                aria-hidden="true"
              />
            </a>
            <span className="stext-109 cl4">Shoping Cart</span>
          </div>
        </div>
        {/* Shoping Cart */}
        <form className="bg0 p-t-75 p-b-85">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-xl-7 m-lr-auto m-b-50">
                <div className="m-l-25 m-r--38 m-lr-0-xl">
                  <div className="wrap-table-shopping-cart">
                    <table className="table-shopping-cart">
                      <tbody>
                        <tr className="table_head">
                          <th className="column-1">Product</th>
                          <th className="column-2" />
                          <th className="column-3">Price</th>
                          <th className="column-4">Quantity</th>
                          <th className="column-5">Total</th>
                        </tr>
                        {cartList.map((item, index) => {
                          TotalPrice +=
                            item.Quantity * cartProducts[index].Price;
                          return (
                            <tr className="table_row" key={item._id}>
                              <td className="column-1">
                                <button
                                  type="button"
                                  onClick={() => removeCartItem(item._id)}
                                >
                                  <div className="how-itemcart1">
                                    <img
                                      src={cartProducts[index].ImgURL}
                                      alt="IMG"
                                    />
                                  </div>
                                </button>
                              </td>
                              <td className="column-2">
                                {cartProducts[index].Name}
                              </td>
                              <td className="column-3">
                                $ {cartProducts[index].Price}
                              </td>
                              <td className="column-4">
                                <div className="wrap-num-product flex-w m-l-auto m-r-0">
                                  <button
                                    type="button"
                                    onClick={() => {
                                      if (item.Quantity > 0) {
                                        console.log(item.Quantity - 1);
                                        if (item.Quantity - 1 == 0) {
                                          deleteCartItem(item._id);
                                        } else
                                          UpdateQuantity(
                                            Number(item.Quantity) - 1,
                                            cartProducts[index]._id
                                          );
                                      }
                                    }}
                                  >
                                    <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                                      <i className="fs-16 zmdi zmdi-minus" />
                                    </div>
                                  </button>
                                  <input
                                    className="mtext-104 cl3 txt-center num-product"
                                    type="number"
                                    name="num-product1"
                                    value={item.Quantity}
                                    onChange={(e) =>
                                      (item.Quantity = e.target.value)
                                    }
                                  />
                                  <button
                                    type="button"
                                    onClick={() => {
                                      UpdateQuantity(
                                        item.Quantity + 1,
                                        cartProducts[index]._id
                                      );
                                    }}
                                  >
                                    <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                                      <i className="fs-16 zmdi zmdi-plus" />
                                    </div>
                                  </button>
                                </div>
                              </td>
                              <td className="column-5">
                                $ {item.Quantity * cartProducts[index].Price}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  <div className="flex-w flex-sb-m bor15 p-t-18 p-b-15 p-lr-40 p-lr-15-sm">
                    <div className="flex-w flex-m m-r-20 m-tb-5">
                      <input
                        className="stext-104 cl2 plh4 size-117 bor13 p-lr-20 m-r-10 m-tb-5"
                        type="text"
                        name="coupon"
                        placeholder="Coupon Code"
                      />
                      <button type="button">
                        <div className="flex-c-m stext-101 cl2 size-118 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-5">
                          Apply coupon
                        </div>
                      </button>
                    </div>
                    <div className="flex-c-m stext-101 cl2 size-119 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-10">
                      Update Cart
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50">
                <div className="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm">
                  <h4 className="mtext-109 cl2 p-b-30">Cart Totals</h4>
                  <div className="flex-w flex-t bor12 p-b-13">
                    <div className="size-208">
                      <span className="stext-110 cl2">Subtotal:</span>
                    </div>
                    <div className="size-209">
                      <span className="mtext-110 cl2">${TotalPrice}</span>
                    </div>
                  </div>
                  <div className="flex-w flex-t bor12 p-t-15 p-b-30">
                    <div className="size-208 w-full-ssm">
                      <span className="stext-110 cl2">Shipping:</span>
                    </div>
                    <div className="size-209 p-r-18 p-r-0-sm w-full-ssm">
                      <p className="stext-111 cl6 p-t-2">
                        There are no shipping methods available. Please double
                        check your address, or contact us if you need any help.
                      </p>
                      <div className="p-t-15">
                        <span className="stext-112 cl8">
                          Calculate Shipping
                        </span>
                        <div className="rs1-select2 rs2-select2 bor8 bg0 m-b-12 m-t-9">
                          <select className="js-select2" name="time">
                            <option>Select a country...</option>
                            <option>USA</option>
                            <option>UK</option>
                          </select>
                          <div className="dropDownSelect2" />
                        </div>
                        <div className="bor8 bg0 m-b-12">
                          <input
                            className="stext-111 cl8 plh3 size-111 p-lr-15"
                            type="text"
                            name="state"
                            placeholder="State /  country"
                          />
                        </div>
                        <div className="bor8 bg0 m-b-22">
                          <input
                            className="stext-111 cl8 plh3 size-111 p-lr-15"
                            type="text"
                            name="postcode"
                            placeholder="Postcode / Zip"
                          />
                        </div>
                        <div className="flex-w">
                          <div className="flex-c-m stext-101 cl2 size-115 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer">
                            Update Totals
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-w flex-t p-t-27 p-b-33">
                    <div className="size-208">
                      <span className="mtext-101 cl2">Total:</span>
                    </div>
                    <div className="size-209 p-t-1">
                      <span className="mtext-110 cl2">${TotalPrice}</span>
                    </div>
                  </div>
                  <button className="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CartDetail;
