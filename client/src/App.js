import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import { Dashboard } from "./Layouts/Dashboard/Dashboard";
import { UserAuthContextProvider } from "./Components/Auth/Contexts/UserAuthContext";
import ProtectedRoute from "./Components/Auth/ProtectedRoute";

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
