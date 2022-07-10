import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Paper } from "@mui/material";
export const Main = () => {
  const [ClientNumbers, setClientNumbers] = React.useState(0);
  const getClientNumbers = () => {
    fetch("/api/Client/GetClientNumbers")
      .then((res) => res.json())
      .then((data) => setClientNumbers(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getClientNumbers();
  });

  return (
    <div>
      <section className="content">
        <div className="container-fluid">
          {/* Small boxes (Stat box) */}
          <div className="row d-flex justify-content-around">
            <div className="col-lg-3 col-6">
              <Paper className="small-box bg-teal" elevation={8}>
                <div className="inner">
                  <h3 className="text-light">18 $</h3>
                  <p className="text-light">Sales Revenue</p>
                </div>
                <div className="icon">
                  <i className="ion ion-cash text-light" />
                </div>
                <a href="/Dashboard/ClientList" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </a>
              </Paper>
            </div>
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-dark">
                <div className="inner">
                  <h3 className="text-light">{ClientNumbers}</h3>
                  <p className="text-light">Clients Registered</p>
                </div>
                <div className="icon">
                  <i className="ion ion-person text-light" />
                </div>
                <a href="/Dashboard/ClientList" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
            {/* ./col */}
            {/* ./col */}
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-dark">
                <div className="inner">
                  <h3>10</h3>
                  <p className="text-light">Workers Registered</p>
                </div>
                <div className="icon">
                  <i className="ion ion-person text-light" />
                </div>
                <Link to="/dashboard/WorkerList" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </Link>
              </div>
            </div>
            {/* ./col */}
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-info">
                <div className="inner">
                  <h3 className="text-light">20</h3>
                  <p className="text-light">Number Of Orders</p>
                </div>
                <div className="icon">
                  <i className="ion ion-bag text-light" />
                </div>
                <Link to="/dashboard/ordersList" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-around">
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-info">
                <div className="inner">
                  <h3 className="text-light">30</h3>
                  <p className="text-light">Products On Stock</p>
                </div>
                <div className="icon">
                  <i className="ion ion-bag text-light" />
                </div>
                <Link to="/Dashboard/ProductList" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              {/* small card */}
              <div className="small-box bg-danger">
                <div className="inner">
                  <h3 className="text-light">53</h3>
                  <p className="text-light">Likes</p>
                </div>
                <div className="icon">
                  <i className="ion ion-heart text-light" />
                </div>
                <a href="/Dashboard" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              {/* small card */}
              <div className="small-box bg-purple">
                <div className="inner">
                  <h3 className="text-light">
                    53<sup style={{ fontSize: 20 }}>%</sup>
                  </h3>
                  <p className="text-light">Bounce Rate</p>
                </div>
                <div className="icon">
                  <i className="ion ion-stats-bars text-light" />
                </div>
                <a href="/Dashboard" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              {/* small card */}
              <div className="small-box bg-danger">
                <div className="inner">
                  <h3 className="text-light">53</h3>
                  <p className="text-light">Comments</p>
                </div>
                <div className="icon">
                  <i className="ion ion-chatbubbles text-light" />
                </div>
                <a href="/Dashboard" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* /.container-fluid */}
      </section>
    </div>
  );
};
