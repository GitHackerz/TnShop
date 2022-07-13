import React, { useEffect, useState } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import "jquery";
import "datatables.net-bs5";
import "datatables.net-buttons-bs5";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";

export const OrderList = () => {
  const [orders, setOrders] = useState([]);

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
  const OrdersList = async () => {
    await fetch("/api/Order/List")
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.log(err));
  };

  const DeleteOrder = async (_id) => {
    await fetch(`/api/Order/Delete/${_id}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    OrdersList();
  };

  useEffect(() => {
    const SyncLoad = async () => {
      await OrdersList();
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
                  <h3 className="card-title">Orders List</h3>
                </div>
                <div className="card-body ">
                  <div className="container-fluid">
                    <table
                      id="example2"
                      className="table table-bordered table-striped "
                    >
                      <thead>
                        <tr>
                          <th className="col-md-3">ID</th>
                          <th className="col-md-2">ClientCIN</th>
                          <th className="col-md-2">TotalPrice</th>
                          <th className="col-md-2">List Of Purchase</th>
                          <th className="col-md-3">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map((order) => {
                          return (
                            <tr key={order._id}>
                              <td>{order._id}</td>
                              <td>{order.ClientCIN}</td>
                              <td>{order.TotalPrice}</td>
                              <td>
                                <Link to={`/Dashboard/Purchases/${order._id}`}>
                                  List
                                </Link>
                              </td>
                              <td className="d-flex justify-content-around">
                                <Button
                                  color="error"
                                  variant="contained"
                                  onClick={() => DeleteOrder(order._id)}
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
                          <th className="col-md-2">ClientCIN</th>
                          <th className="col-md-2">TotalPrice</th>
                          <th className="col-md-2">List Of Purchase</th>
                          <th className="col-md-23">Actions</th>
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
