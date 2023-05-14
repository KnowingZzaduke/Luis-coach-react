import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./scss/app.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./components/error/ErrorPage";
import { Signin } from "./routes/forms/Signin";
import { Signup } from "./routes/forms/Signup";
import { Welcome } from "./routes/welcome/Welcome";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "signin",
    element: <Signin />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "/welcome",
    element: <Welcome />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
