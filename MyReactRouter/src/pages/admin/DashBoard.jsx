import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../../assets/dashboard.css";

export const DashBoard = () => {
  return (
    <>
      <h1>Welcome to my dashboard</h1>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? "myactive" : "")}
          to="/admin/accounts"
        >
          Accounts
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "myactive" : "")}
          to="/admin/review"
        >
          Review
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};
