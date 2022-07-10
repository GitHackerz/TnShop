import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useUserAuth } from "../Auth/Contexts/UserAuthContext";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import InventoryIcon from "@mui/icons-material/Inventory";
export const SideBar = () => {
  const { user } = useUserAuth();
  var LoggedInWithGoogle = user.displayName;

  if (!LoggedInWithGoogle && user.email)
    var userName = user.email.split("@")[0];

  return (
    <div>
      {/* Main Sidebar Container */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <NavLink to="/Dashboard" className="brand-link">
          <img
            src="/dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">TN SHOP</span>
        </NavLink>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src={
                  LoggedInWithGoogle
                    ? localStorage.getItem("photoUrl")
                    : "/dist/img/user2-160x160.jpg"
                }
                className="img-circle elevation-2"
                alt="User"
              />
            </div>
            <div className="info">
              <div>
                <Link to="/Dashboard" className="d-block">
                  {LoggedInWithGoogle ? localStorage.getItem("name") : userName}
                </Link>
              </div>
            </div>
          </div>
          {/* SidebarSearch Form */}
          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input
                className="form-control form-control-sidebar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw" />
                </button>
              </div>
            </div>
          </div>
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-header">ADD</li>
              <li className="nav-item"></li>
              <li className="nav-item">
                <NavLink to="/Dashboard/ClientAdd" className="nav-link">
                  <PersonAddAlt1Icon />
                  <p>&nbsp;Add Client</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Dashboard/ProductAdd" className="nav-link">
                  <InventoryIcon />
                  <p>&nbsp;Add Product</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Dashboard/WorkerAdd" className="nav-link">
                  <PersonAddAlt1Icon />
                  <p>&nbsp;Add Worker</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/#" className="nav-link">
                  <i className="nav-icon fas fa-copy" />
                  <p>
                    Layout Options
                    <i className="fas fa-angle-left right" />
                    <span className="badge badge-info right">6</span>
                  </p>
                </NavLink>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <NavLink to="/pages/layout/top-nav" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Top Navigation</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <div
                      to="/pages/layout/top-nav-sidebar"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Top Navigation + Sidebar</p>
                    </div>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/pages/layout/boxed" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Boxed</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <div to="/pages/layout/fixed-sidebar" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Fixed Sidebar</p>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      to="/pages/layout/fixed-sidebar-custom"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>
                        Fixed Sidebar <small>+ Custom Area</small>
                      </p>
                    </div>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/pages/layout/fixed-topnav"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Fixed Navbar</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/pages/layout/fixed-footer"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Fixed Footer</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <div
                      to="/pages/layout/collapsed-sidebar"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Collapsed Sidebar</p>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="nav-header">EXAMPLES</li>
              <li className="nav-item">
                <NavLink to="/pages/calendar" className="nav-link">
                  <i className="nav-icon far fa-calendar-alt" />
                  <p>
                    Calendar
                    <span className="badge badge-info right">2</span>
                  </p>
                </NavLink>
              </li>
              <li className="nav-header">LABELS</li>
              <li className="nav-item">
                <NavLink to="/#" className="nav-link">
                  <i className="nav-icon far fa-circle text-danger" />
                  <p className="text">Important</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/#" className="nav-link">
                  <i className="nav-icon far fa-circle text-warning" />
                  <p>Warning</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/#" className="nav-link">
                  <i className="nav-icon far fa-circle text-info" />
                  <p>Informational</p>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
};
