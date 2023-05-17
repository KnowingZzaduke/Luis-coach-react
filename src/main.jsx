import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./scss/app.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DataContextProvider } from "./context/DataContext";
import { ErrorPage } from "./components/error/ErrorPage";
import { Signin } from "./routes/forms/Signin";
import { Signup } from "./routes/forms/Signup";
import { Welcome } from "./routes/welcome/Welcome";
import { InfoCourses } from "./routes/infoCourses/InfoCourses";

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
  {
    path: "/info&cursos/:id",
    element: <InfoCourses />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <DataContextProvider>
    <RouterProvider router={router} />
  </DataContextProvider>
);
