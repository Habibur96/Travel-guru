import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../Home/Home";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Terms from "../Terms/Terms";
import Sajek from "../../Booking/Sajek/Sajek";
import Sreemongol from "../../Booking/Sreemongol/Sreemongol";
import Sundorbon from "../../Booking/Sundorbon/Sundorbon";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import PlaceDetails from "../../Booking/Places/PlaceDetails/PlaceDetails";
import Places from "../../Booking/Places/Places";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
        path: "/terms",
        element: <Terms></Terms>,
      },
      {
        path: "/places",
        element: <Places></Places>,
      },

      {
        path: "/placeDetails/:name",
        element: <PlaceDetails></PlaceDetails>,
      },
      {
        path: "/sajek",
        element: (
          <PrivateRoute>
            <Sajek></Sajek>
          </PrivateRoute>
        ),
      },
      {
        path: "/sreemongol",
        element: (
          <PrivateRoute>
            <Sreemongol></Sreemongol>
          </PrivateRoute>
        ),
      },
      {
        path: "/sundorbon",
        element: (
          <PrivateRoute>
            <Sundorbon></Sundorbon>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
