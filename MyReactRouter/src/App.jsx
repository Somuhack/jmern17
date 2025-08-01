import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Sevices from "./pages/Sevices";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import { DashBoard } from "./pages/admin/DashBoard";
import UserAccount from "./pages/admin/UserAccount";
import UserReview from "./pages/admin/UserReview";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<DashBoard />}>
          <Route path="/admin/acounts" element={<UserAccount />} />
          <Route path="/admin/review" element={<UserReview />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
