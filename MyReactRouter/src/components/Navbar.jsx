import React from 'react';
import "../assets/Navbar.css";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="all-list-items">
        <li className="list-item">
          <NavLink 
            to="/"
            className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
          >
            Home
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink 
            to="/login"
            className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
          >
            Login
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink 
            to="/register"
            className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
          >
            Sign up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
