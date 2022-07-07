import React from "react";
import { Navigate } from "react-router-dom";

export const CheckLogin = () => {
  const isLoggedIn = true;
  //   const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  return (
    <div>
      {isLoggedIn ? <Navigate to={"/Dashboard"} /> : <h3>Please Login</h3>}
    </div>
  );
};
