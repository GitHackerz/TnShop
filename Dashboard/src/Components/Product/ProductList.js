import React, { useEffect, useState } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

import "jquery";
import "datatables.net-bs5";
import "datatables.net-buttons-bs5";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import { Button } from "@mui/material";

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  const DataTableJquery = () => {
    $(document).ready(function() {
      setTimeout(function() {
        $(function() {
          $("#example2")
            .DataTable({
              responsive: true,
              lengthChange: false,
              autoWidth: false,
              buttons: ["copy", "csv", "excel", "pdf", "print", "colvis"],
            })
            .buttons()
            .container()
            .appendTo("#example2_wrapper .col-md-6:eq(0)");
        });
      }, 100);
    });
  };
  const ProductsList = async () => {
    await fetch("/api/Product/List")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  };

  const DeleteProduct = async (_id) => {
    await fetch(`/api/Product/Delete/${_id}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    ProductsList();
  };

  useEffect(() => {
    const SyncLoad = async () => {
      await ProductsList();
      DataTableJquery();
    };
    SyncLoad();
  }, []);

  return (
    <div>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Products List</h3>
                </div>
                <div className="card-body ">
                  <div className="container-fluid">
                    <table
                      id="example2"
                      className="table table-bordered table-striped "
                    >
                      <thead>
                        <tr>
                          <th className="col-md-3">Name</th>
                          <th className="col-md-3">ID</th>
                          <th className="col-md-2">Quantity</th>
                          <th className="col-md-2">Price</th>
                          <th className="col-md-2">Likes</th>
                          <th className="col-md-3">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {products.map((product) => {
                          return (
                            <tr key={product._id}>
                              <td>{product._id}</td>
                              <td>{product.Name}</td>
                              <td>{product.Quantity}</td>
                              <td>{product.Price}</td>
                              <td>{product.Likes}</td>
                              <td className="d-flex justify-content-around">
                                <Link
                                  to={`/Dashboard/ProductUpdate/${product._id}`}
                                >
                                  <Button color="warning" variant="contained">
                                    Update
                                  </Button>
                                </Link>
                                <Button
                                  color="error"
                                  variant="contained"
                                  onClick={() => DeleteProduct(product._id)}
                                >
                                  Delete
                                </Button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                      <tfoot>
                        <tr>
                          <th className="col-md-3">ID</th>
                          <th className="col-md-3">Name</th>
                          <th className="col-md-2">Quantity</th>
                          <th className="col-md-2">Price</th>
                          <th className="col-md-2">Likes</th>
                          <th className="col-md-3">Actions</th>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
