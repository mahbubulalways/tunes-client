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
import AdminRoute from "./adminRoute";
import AddClass from "../Pages/Dashboard/Instructor/AddClass";
import InstructorClass from "../Pages/Dashboard/Instructor/InstructorClass";
import ManageClass from "../Pages/Dashboard/Admin/ManageClass";
import InstructorRoute from "./InstructorRoute";
import Payment from "../Pages/Dashboard/Students/Payment";
import Feedback from "../Pages/Dashboard/Admin/Feedback";
import EnrollClass from "../Pages/Dashboard/Students/EnrollClass";
import PaymentHistory from "../Pages/Dashboard/Students/PaymentHistory";


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
            element:<PrivateRoutes> <Classes></Classes></PrivateRoutes>, 
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
          path:'my-classes/payment/:id',
          element: <PrivateRoutes><Payment></Payment></PrivateRoutes>
        },
        {
          path:'enrollClass',
          element: <PrivateRoutes><EnrollClass></EnrollClass></PrivateRoutes>
        },
        {
          path:'paymentHistory',
          element: <PrivateRoutes><PaymentHistory></PaymentHistory></PrivateRoutes>
        },
        {
          path:'allUsers',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path:'manageClass',
          element: <AdminRoute><ManageClass></ManageClass></AdminRoute>
        },
        {
          path:'manageClass/feedback/:id',
          element: <AdminRoute><Feedback></Feedback></AdminRoute>
        },
        {
          path:'addClass',
          element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
        },
        {
          path:'instructorClass',
          element: <InstructorRoute><InstructorClass></InstructorClass></InstructorRoute>
        },
      ]
  },
  ]);

export default router