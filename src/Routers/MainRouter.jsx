import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Log/Login";
import Register from "../Pages/Log/Register";

import ServicesDetails from "../Pages/Services/ServicesDetails";
import Checkout from "../Pages/Checkout/Checkout";
import AddService from "../Pages/AddService/AddService";
import Profile from "../Pages/Profile/Profile";
import Booking from "../Pages/Booking/Booking";
import Privet from "../Privets/Privet";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
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
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/services/:id",
        element: <ServicesDetails></ServicesDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/service/${params.id}`),
      },
      {
        path: "/checkout/:id",
        element: <Checkout></Checkout>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/service/${params.id}`),
      },
      {
        path: "/addservices",
        element: <AddService></AddService>,
      },
      {
        path: "/booking",
        element: (
          <Privet>
            <Booking></Booking>
          </Privet>
        ),
      },
    ],
  },
]);

export default MainRouter;
