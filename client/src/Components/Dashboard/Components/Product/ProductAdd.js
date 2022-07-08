import React from "react";

export const ProductAdd = () => {
  const [productName, setProductName] = React.useState("");
  const [productPrice, setProductPrice] = React.useState("");
  const [productQuantity, setProductQuantity] = React.useState("");
  const [Submitted, setSubmitted] = React.useState(0);
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const product = {
      productName,
      productPrice,
      productQuantity,
    };
    fetch("http://localhost:5000/api/Product/Create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((res) => {
        res.json();
        setSubmitted(1);
      })
      .catch((err) => {
        console.log(err);
        setSubmitted(-1);
      });
  };
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
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary w-50 mt-4">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {Submitted > 0 && (
          <div className="card-footer bg-success">
            <h5 className="text-center">
              <i className="icon fas fa-check-circle" />
              &nbsp;&nbsp;Product Added
            </h5>
          </div>
        )}
        {Submitted < 0 && (
          <div className="card-footer bg-danger">
            <h5 className="text-center">
              <i className="icon fas fa-ban" />
              &nbsp;&nbsp;Error While Adding Product
            </h5>
          </div>
        )}
      </div>
      <div className="col" />
    </div>
  );
};
