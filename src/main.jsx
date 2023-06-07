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

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    errorElement:<RouteError></RouteError>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);