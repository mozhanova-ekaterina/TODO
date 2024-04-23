import React from "react";
import Header from "../components/Header/Header";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const isAuth = () => {
    const { email } = useSelector((state) => state.user);
    return !!email;
  };

  return (
    <div>
      <Header></Header>
      <div className="container">
        {isAuth() ? (
          <Navigate to="/todoLists"></Navigate>
        ) : (
          <Navigate to="/login"></Navigate>
        )}
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
