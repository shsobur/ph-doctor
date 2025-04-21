import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Routes from "./Routes/Routes";
import ErrorPage from "./Components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes></Routes>,
    errorElement: <ErrorPage></ErrorPage>,
    children : [
      
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
