import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../../assets/dashboard.css";

export const DashBoard = () => {
  return (
    <>
      <h1>Wellcone to my dashboard</h1>
      <NavLink
        className={({ isA }) => (isA ? "" : "myactive")}
        to={"/admin/acounts"}
      >
        Acounts
      </NavLink>
      <NavLink
        className={({ isA }) => (isA ? "" : "myactive")}
        to={"/admin/review"}
      >
        Review
      </NavLink>
      <Outlet />
    </>
  );
};
