import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../../Components/Pages/Home/Home";
import Root from "../Layouts/Root/Root";
import Login from './../Pages/Login/Login';
import Register from "../Pages/Register/Register";
import Details from "../Pages/Details/Details";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../residential.json")
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "details/:id",
        element: <Details></Details>,
        loader: () => fetch("../residential.json")
      },
    ],
  },
]);

export default Router;
