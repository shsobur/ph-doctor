import "./index.css";
import { StrictMode } from "react";
import Routes from "./Routes/Routes";
import { createRoot } from "react-dom/client";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import DoctorDetails from "./Components/DoctorDetails/DoctorDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePageLayout from "./Pages/Home/HomePageLayout/HomePageLayout";

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
