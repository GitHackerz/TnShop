import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const ProductUpdate = () => {
  const [productId] = useState(useParams().id);
  const [productName, setProductName] = useState("");
  const [productQuantity, setProductQuantity] = useState(0);
  const [productPrice, setProductPrice] = useState(0);
  const [productsLikes, setProductsLikes] = useState(0);
  const [Submitted, setSubmitted] = useState(false);
  const [Error, setError] = useState("");
  const navigate = useNavigate();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    setError("");
    if (isNaN(productQuantity))
      return setError("Product quantity must be numbers");
    if (isNaN(productPrice)) return setError("Product Price must be numbers");
    if (isNaN(productsLikes)) return setError("Product Likes must be numbers");
    const product = {
      productId,
      productName,
      productQuantity,
      productPrice,
      productsLikes,
    };
    fetch(`/api/Product/Update`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((res) => {
        setSubmitted(true);
        setTimeout(() => {
          navigate("/Dashboard/ProductList");
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
        setError("Error While Updating Product");
      });
  };

  const GetProductById = async () => {
    await fetch(`/api/Product/GetById/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProductName(data.Name);
        setProductQuantity(data.Quantity);
        setProductPrice(data.Price);
        setProductsLikes(data.Likes);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const SyncedFN = async () => {
      await GetProductById();
    };
    SyncedFN();
  }, []);

  return (
    <div className="row">
      <div className="col" />
      <div className="bg1 col pt-5">
        <div className="card card-danger">
          <div className="card-header bg-primary pt-4">
            <h4 className="text-center">Add Product</h4>
          </div>
          <div className="card-body ">
            <form onSubmit={onSubmitHandler}>
              <div className="card-body">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                    required
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Quantity</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Quantity"
                    required
                    value={productQuantity}
                    onChange={(e) => setProductQuantity(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Price</label>
                  <input
                    type="number"
                    step={0.01}
                    className="form-control"
                    placeholder="Enter Price"
                    required
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Likes</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Quantity"
                    required
                    value={productsLikes}
                    onChange={(e) => setProductsLikes(e.target.value)}
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary w-50 mt-4">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {Error && (
          <div className="card-footer bg-danger">
            <h5 className="text-center">
              <i className="icon fas fa-ban" />
              &nbsp;&nbsp;{Error}
            </h5>
          </div>
        )}
        {Submitted && (
          <div className="card-footer bg-success">
            <h5 className="text-center">
              <i className="icon fas fa-check-circle" />
              &nbsp;&nbsp;Product Updated
            </h5>
          </div>
        )}
      </div>
      <div className="col" />
    </div>
  );
};
