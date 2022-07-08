import React from "react";
import { Routes, Route } from "react-router-dom";
import { ClientList } from "./Components/Client/ClientList";
import { Main } from "./Components/Main";
import { NavBar } from "./NavBar";
import { SideBar } from "./SideBar";
import { Link } from "react-router-dom";
import { ClientAdd } from "./Components/Client/ClientAdd";
import { ProductList } from "./Components/Product/ProductList";
import { ProductAdd } from "./Components/Product/ProductAdd";
import { WorkerList } from "./Components/Worker/WorkerList";
import { WorkerAdd } from "./Components/Worker/WorkerAdd";

export const Dashboard = () => {
  return (
    <div className="wrapper">
      <NavBar />
      <SideBar />
      <div className="content-wrapper" styles={{ height: "100vh" }}>
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Dashboard</h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">Dashboard v1</li>
                </ol>
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
        {/* /.content-header */}

        <Routes>
          <Route index element={<Main />} />
          <Route path="ClientList" element={<ClientList />} />
          <Route path="ClientAdd" element={<ClientAdd />} />
          <Route path="WorkerList" element={<WorkerList />} />
          <Route path="WorkerAdd" element={<WorkerAdd />} />
          <Route path="ProductList" element={<ProductList />} />
          <Route path="ProductAdd" element={<ProductAdd />} />
        </Routes>
      </div>
    </div>
  );
};
