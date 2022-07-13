import React, { useEffect, useState } from "react";
import PageCard from "./PageCard";

export const Main = () => {
  const [ClientNumbers, setClientNumbers] = useState(0);
  const [WorkerNumbers, setWorkerNumbers] = useState(0);
  const [ProductNumbers, setProductNumbers] = useState(0);
  const [ProductsLikes, setProductsLikes] = useState(0);
  const [CashRevenue, setCashRevenue] = useState(0);
  const [CommentNumbers, setCommentNumbers] = useState(0);
  const [OrderNumbers, setOrderNumbers] = useState(0);
  const getClientNumbers = async () => {
    fetch("/api/Client/GetClientNumbers")
      .then((res) => res.json())
      .then((data) => setClientNumbers(data))
      .catch((err) => console.log(err));
  };

  const getWorkerNumbers = () => {
    fetch("/api/Worker/GetWorkerNumbers")
      .then((res) => res.json())
      .then((data) => setWorkerNumbers(data))
      .catch((err) => console.log(err));
  };

  const getProductNumbers = () => {
    fetch("/api/Product/GetProductNumbers")
      .then((res) => res.json())
      .then((data) => setProductNumbers(data))
      .catch((err) => console.log(err));
  };

  const getProductsLikes = () => {
    fetch("/api/Product/GetProductsLikes")
      .then((res) => res.json())
      .then((data) => setProductsLikes(data))
      .catch((err) => console.log(err));
  };

  const getOrdersRevenue = () => {
    fetch("api/Order/GetOrdersRevenue")
      .then((res) => res.json())
      .then((data) => setCashRevenue(data))
      .catch((err) => console.log(err));
  };

  const GetFeedbackNumbers = () => {
    fetch("api/Feedback/GetFeedbackNumbers")
      .then((res) => res.json())
      .then((data) => setCommentNumbers(data))
      .catch((err) => console.log(err));
  };

  const GetOrderNumbers = () => {
    fetch("api/Order/GetOrderNumbers")
      .then((res) => res.json())
      .then((data) => setOrderNumbers(data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getClientNumbers();
    getWorkerNumbers();
    getProductNumbers();
    getProductsLikes();
    getOrdersRevenue();
    GetOrderNumbers();
    GetFeedbackNumbers();
  });

  return (
    <div>
      <section className="content">
        <div className="container-fluid">
          <div className="row d-flex justify-content-around">
            <div className="col-lg-3 col-6">
              <PageCard
                Title="Cash Revenue"
                Value={CashRevenue}
                Url=""
                Class="small-box bg-teal"
                Icon="ion ion-cash text-light"
                type="Cash"
              />
            </div>
            <div className="col-lg-3 col-6">
              <PageCard
                Class="small-box bg-dark"
                Title="Clients Registered"
                Value={ClientNumbers}
                Icon="ion ion-person text-light"
                Url="/Dashboard/ClientList"
              />
            </div>
            <div className="col-lg-3 col-6">
              <PageCard
                Class="small-box bg-dark"
                Title="Workers Registered"
                Value={WorkerNumbers}
                Icon="ion ion-person text-light"
                Url="/Dashboard/WorkerList"
              />
            </div>

            <div className="col-lg-3 col-6">
              <PageCard
                Class="small-box bg-info"
                Title="Products On Stock"
                Value={ProductNumbers}
                Icon="ion ion-bag text-light"
                Url="/Dashboard/ProductList"
              />
            </div>
          </div>
          <div className="row d-flex justify-content-around">
            <div className="col-lg-3 col-6">
              <PageCard
                Class="small-box bg-info"
                Title="Number Of Orders"
                Value={OrderNumbers}
                Icon="ion ion-bag text-light"
                Url="/Dashboard/OrderList"
              />
            </div>

            <div className="col-lg-3 col-6">
              <PageCard
                Class="small-box bg-danger"
                Title="Likes"
                Value={ProductsLikes}
                Icon="ion ion-heart text-light"
                Url="/Dashboard"
              />
            </div>

            <div className="col-lg-3 col-6">
              <PageCard
                Class="small-box bg-danger"
                Title="Comments"
                Value={CommentNumbers}
                Icon="ion ion-chatbubbles text-light"
                Url="/Dashboard/FeedbackList"
              />
            </div>

            <div className="col-lg-3 col-6">
              <PageCard
                Class="small-box bg-purple"
                Title="Bounce Rate"
                Value="53"
                Icon="ion ion-stats-bars text-light"
                Url="/Dashboard"
                type="Pourc"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
