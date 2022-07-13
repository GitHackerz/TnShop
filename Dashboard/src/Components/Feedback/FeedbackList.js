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

export const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const DataTableJquery = () => {
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
  };
  const FeedbacksList = async () => {
    await fetch("/api/Feedback/List")
      .then((res) => res.json())
      .then((data) => setFeedbacks(data))
      .catch((err) => console.log(err));
  };

  const DeleteFeedback = async (_id) => {
    await fetch(`/api/Feedback/Delete/${_id}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    FeedbacksList();
  };

  useEffect(() => {
    const SyncLoad = async () => {
      await FeedbacksList();
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
                  <h3 className="card-title">FeedBack List</h3>
                </div>
                <div className="card-body">
                  <table
                    id="example2"
                    className="table table-bordered table-striped"
                  >
                    <thead>
                      <tr>
                        <th>ClientId</th>
                        <th>ProductId</th>
                        <th>Comment</th>
                        <th>Rate</th>
                        <th>Date</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {feedbacks.map((feedback) => {
                        return (
                          <tr key={feedback._id}>
                            <td>{feedback.ClientId}</td>
                            <td>{feedback.ProductId}</td>
                            <td>{feedback.Comment}</td>
                            <td>{feedback.Rate}</td>
                            <td>{new Date(feedback.Date).toLocaleString()}</td>
                            <td className="d-flex justify-content-around">
                              <Button
                                color="error"
                                variant="contained"
                                onClick={() => DeleteFeedback(feedback._id)}
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
                        <th>ClientId</th>
                        <th>ProductId</th>
                        <th>Comment</th>
                        <th>Rate</th>
                        <th>Date</th>
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
