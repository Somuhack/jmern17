import { Route, Routes } from "react-router-dom";

// Define routes
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { DashBoard } from "../pages/admin/DashBoard";
import UserAccount from "../pages/admin/UserAccount";
import UserReview from "../pages/admin/UserReview";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "/admin",
    element: <DashBoard />,
    children: [
      { path: "accounts", element: <UserAccount /> },
      { path: "review", element: <UserReview /> },
    ],
  },
];

const RouterRender = ({ routes }) => {
  return routes.map(({ path, element, children }, index) => (
    <Route key={index} path={path} element={element}>
      {children && RouterRender({ routes: children })}
    </Route>
  ));
};

const AppRoutes = () => {
  return (
    <Routes>
      {RouterRender({ routes })}
    </Routes>
  );
};

export default AppRoutes;
