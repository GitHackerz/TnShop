import React from "react";
import { Link } from "react-router-dom";
// import { SalesChart } from "./SalesChart";

export const Main = () => {
  return (
    <div>
      <section className="content">
        <div className="container-fluid">
          {/* Small boxes (Stat box) */}
          <div className="row d-flex justify-content-around">
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-teal">
                <div className="inner">
                  <h3>18 $</h3>
                  <p>Sales Revenue</p>
                </div>
                <div className="icon">
                  <i className="ion ion-cash" />
                </div>
                <a href="/Dashboard/ClientList" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-orange">
                <div className="inner">
                  <h3>150</h3>
                  <p>Clients Registered</p>
                </div>
                <div className="icon">
                  <i className="ion ion-person" />
                </div>
                <Link to="/Dashboard/ClientList" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </Link>
              </div>
            </div>
            {/* ./col */}
            {/* ./col */}
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-orange">
                <div className="inner">
                  <h3>10</h3>
                  <p>Workers Registered</p>
                </div>
                <div className="icon">
                  <i className="ion ion-person" />
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
                  <h3>20</h3>
                  <p>Number Of Orders</p>
                </div>
                <div className="icon">
                  <i className="ion ion-bag" />
                </div>
                <a href="/dashboard/ordersList" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-around">
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-info">
                <div className="inner">
                  <h3>30</h3>
                  <p>Products On Stock</p>
                </div>
                <div className="icon">
                  <i className="ion ion-bag" />
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
                  <h3>53</h3>
                  <p>Likes</p>
                </div>
                <div className="icon">
                  <i className="ion ion-heart" />
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
                  <h3>
                    53<sup style={{ fontSize: 20 }}>%</sup>
                  </h3>
                  <p>Bounce Rate</p>
                </div>
                <div className="icon">
                  <i className="ion ion-stats-bars" />
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
                  <h3>53</h3>
                  <p>Comments</p>
                </div>
                <div className="icon">
                  <i className="ion ion-chatbubbles" />
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
