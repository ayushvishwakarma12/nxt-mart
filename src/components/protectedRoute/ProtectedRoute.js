import React from "react";
import { Route, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ element, ...rest }) => {
  const Navigate = useNavigate();
  console.log(element);
  const jwtToken = Cookies.get("jwt-token");

  const isAuthenticated = true;
  return isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to={"/login"} />
  );
};

export default ProtectedRoute;
