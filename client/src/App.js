import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Layouts/Auth/Login";
import Signup from "./Layouts/Auth/Signup";
import { Dashboard } from "./Layouts/Dashboard/Dashboard";
import { UserAuthContextProvider } from "./Layouts/Auth/Contexts/UserAuthContext";
import ProtectedRoute from "./Layouts/Auth/ProtectedRoute";

export const App = () => {
  return (
    <div>
      <UserAuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/*">
              <Route path="Signup" element={<Signup />} />
              <Route
                path="Dashboard/*"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserAuthContextProvider>
    </div>
  );
};
