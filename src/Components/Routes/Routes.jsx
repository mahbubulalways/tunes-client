import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Instructor from "../Pages/Instructor/Instructor";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Layout/Dashboard";
import MyClasses from "../Pages/Dashboard/Students/MyClasses";
import PrivateRoutes from "./PrivateRoutes";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path: "/",
            element: <Home></Home>, 
        },
        {
            path: "/instructor",
            element: <Instructor></Instructor>, 
        },
        {
            path: "/classes",
            element: <Classes></Classes>, 
        },
        {
            path: "/login",
            element: <Login></Login>, 
        },
        {
            path: "/register",
            element: <Register></Register>, 
        },
        
      ]
    },
    {
      path: "dashboard",
      element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>, 
      children:[
        {
          path:'my-classes',
          element: <PrivateRoutes><MyClasses></MyClasses></PrivateRoutes>
        },
        {
          path:'allUsers',
          element: <PrivateRoutes><AllUsers></AllUsers></PrivateRoutes>
        },
      ]
  },
  ]);

export default router