import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./Layout/Main";
import RouteError from "./Pages/RouteError/RouteError";
import Home from "./Pages/Home/Home/Home";
import AuthProviders from "./Providers/AuthProvider";
import { HelmetProvider } from "react-helmet-async";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Instructors from "./Pages/Instructors/Instructors";
import Classes from "./Pages/Classes/Classes";
import { QueryClient, QueryClientProvider } from "react-query";
import Dashboard from "./Layout/Dashboard";
import SelectedClass from "./Pages/Dashboard/SelectedClass/SelectedClass";
import ManageUsers from "./Pages/Dashboard/ManageUsers/ManageUsers";
import AdminRoute from "./Routes/AdminRoute";
import AddClass from "./Pages/Dashboard/AddClass/AddClass";
import MyClass from "./Pages/Dashboard/MyClass/MyClass";
import PaymentHistory from "./Pages/Dashboard/PaymentHistory/PaymentHistory";
import Payment from "./Pages/Payment/Payment";
import EnrolledClasses from "./Pages/Dashboard/Enrolled Classes/EnrolledClasses";
import ManageClasses from "./Pages/Dashboard/ManageClasses/ManageClasses";
import PrivateRoutes from "./Routes/PrivateRoutes";
import InstructorRoute from "./Routes/InstructorRoute";
import UpdateClass from "./Pages/Dashboard/UpdateClass/UpdateClass";
import AdminHome from "./Pages/Dashboard/AdminHome/AdminHome";
import InstructorHome from "./Pages/Dashboard/InstructorHome/InstructorHome";
import StudentHome from "./Pages/Dashboard/StudentHome/StudentHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <RouteError></RouteError>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
        path: "/instructors",
        element: <PrivateRoutes><Instructors></Instructors></PrivateRoutes>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      }
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children: [
      //student routes
      {
        path:"student",
        element:<StudentHome/>
      },
      {
        path: "bookedClass",
        element: <SelectedClass></SelectedClass>,
      },
      {
        path: "payments",
        element: <Payment></Payment>,
      },
      {
        path: "enrolledClasses",
        element: <EnrolledClasses></EnrolledClasses>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },

      //instructor routes
      {
        path:"instructor",
        element:(
          <InstructorRoute>
          <InstructorHome/>
        </InstructorRoute>
        )
      },
      {
        path: "addClass",
        element: (
          <InstructorRoute>
            <AddClass></AddClass>
          </InstructorRoute>
        ),
      },
      {
        path: "updateClass/:id",
        element: (
          <InstructorRoute>
            <UpdateClass></UpdateClass>
          </InstructorRoute>
        ),
      },
      {
        path: "myClass",
        element: (
          <InstructorRoute>
            <MyClass></MyClass>
          </InstructorRoute>
        ),
      },

      //admin routes
      {
        path:"admin",
        element:(
          <AdminRoute>
            <AdminHome/>
          </AdminRoute>
        )
      },
      {
        path: "manageUsers",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
      {
        path: "manageClasses",
        element: (
          <AdminRoute>
            <ManageClasses></ManageClasses>
          </AdminRoute>
        ),
      },
    ],
  },
]);
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
      </HelmetProvider>
    </AuthProviders>
  </React.StrictMode>
);
