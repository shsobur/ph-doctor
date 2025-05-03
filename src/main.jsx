import "./index.css";
import { StrictMode } from "react";
import Routes from "./Routes/Routes";
import { createRoot } from "react-dom/client";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import DoctorDetails from "./Components/DoctorDetails/DoctorDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePageLayout from "./Pages/Home/HomePageLayout/HomePageLayout";
import BookingPageLayout from "./Pages/Bookings/BookingPageLayout/BookingPageLayout";
import Blogs from "./Pages/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes></Routes>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        Component: HomePageLayout,
      },
      {
        path: "/bookings",
        Component: BookingPageLayout,
      },
      {
        path: "/blogs",
        Component: Blogs,
      },
      {
        path: "/doctorDetails/:id",
        Component: DoctorDetails,
        loader: () => fetch("../doctor.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
