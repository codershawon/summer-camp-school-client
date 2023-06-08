import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from "./Layout/Main";
import RouteError from "./Pages/RouteError/RouteError";
import Home from "./Pages/Home/Home/Home";
import AuthProviders from "./Providers/AuthProviders";
import { HelmetProvider } from "react-helmet-async";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Instructors from "./Pages/Instructors/Instructors";
import Classes from "./Pages/Classes/Classes";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    errorElement:<RouteError></RouteError>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/instructors",
        element:<Instructors></Instructors>
      },
      {
        path:"/classes",
        element:<Classes></Classes>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders><HelmetProvider><RouterProvider router={router} /></HelmetProvider></AuthProviders>
  </React.StrictMode>
);