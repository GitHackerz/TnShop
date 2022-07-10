import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PageCard from "./PageCard";

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
          <div className="row d-flex justify-content-around">
            <div className="col-lg-3 col-6">
              <PageCard
                Title="Cash Revenue"
                Value="1500"
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
                Value="10"
                Icon="ion ion-person text-light"
                Url="/Dashboard/WorkerList"
              />
            </div>

            <div className="col-lg-3 col-6">
              <PageCard
                Class="small-box bg-info"
                Title="Products On Stock"
                Value="30"
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
                Value="20"
                Icon="ion ion-bag text-light"
                Url="/Dashboard/ordersList"
              />
            </div>

            <div className="col-lg-3 col-6">
              <PageCard
                Class="small-box bg-danger"
                Title="Likes"
                Value="53"
                Icon="ion ion-heart text-light"
                Url="/Dashboard"
              />
            </div>

            <div className="col-lg-3 col-6">
              <PageCard
                Class="small-box bg-danger"
                Title="Comments"
                Value="53"
                Icon="ion ion-chatbubbles text-light"
                Url="/Dashboard"
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
