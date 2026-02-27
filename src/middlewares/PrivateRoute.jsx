import React from "react";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const token = localStorage.getItem("token");
  if (token) {
    return children;
  }
  return (
    <Navigate
      to="/login"
      replace
      state={{
        from: location.pathname,
        message: "You must be logged in to view this page.",
      }}
    />
  );
};

export default PrivateRoutes;
