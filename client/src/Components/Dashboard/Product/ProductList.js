import React, { useEffect, useState } from "react";

import "jquery";
import "datatables.net-bs5";
import "datatables.net-buttons-bs5";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";

import $ from "jquery";

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
  useEffect(() => {
    fetch("/api/Product/List")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
    DataTableJquery();
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
                <div className="card-body">
                  <table
                    id="example2"
                    className="table table-bordered table-striped"
                  >
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product) => {
                        return (
                          <tr key={product._id}>
                            <td>{product.Name}</td>
                            <td>{product.Quantity}</td>
                            <td>{product.Price}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
