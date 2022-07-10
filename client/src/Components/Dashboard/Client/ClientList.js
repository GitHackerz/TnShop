import React, { useEffect, useState } from "react";

import "jquery";
import "datatables.net-bs5";
import "datatables.net-buttons-bs5";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";

import $ from "jquery";
export const ClientList = () => {
  const [clients, setClients] = useState([]);

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
    ClientsList();
    DataTableJquery();
  }, []);

  const ClientsList = async () => {
    await fetch("/api/Client/List")
      .then((res) => res.json())
      .then((data) => setClients(data))
      .catch((err) => console.log(err));
  };
  const DeleteClient = async (_id) => {
    await fetch(`/api/Client/Delete/${_id}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    ClientsList();
  };

  return (
    <div>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">
                    DataTable with default features
                  </h3>
                </div>
                <div className="card-body">
                  <table
                    id="example2"
                    className="table table-bordered table-striped"
                  >
                    <thead>
                      <tr>
                        <th>CIN</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>PhoneNumber</th>
                        <th>Age</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {clients.map((client) => {
                        return (
                          <tr key={client._id}>
                            <td>{client.CIN}</td>
                            <td>{client.Name}</td>
                            <td>{client.Email}</td>
                            <td>{client.PhoneNumber}</td>
                            <td>{client.Age}</td>
                            <td className="d-flex justify-content-around">
                              <button type="button" className="btn btn-warning">
                                Update
                              </button>
                              <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => DeleteClient(client._id)}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>PhoneNumber</th>
                        <th>Age</th>
                        <th>Actions</th>
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