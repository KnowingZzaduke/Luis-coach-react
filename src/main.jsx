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
import { WelcomeW } from "./components/welcome/Welcome";
import { InfoCourses } from "./routes/infoCourses/InfoCourses";
import { Info } from "./components/infoCourses/Info";
import { Library } from "./components/welcome/library/Library";
import { Courses } from "./routes/courses/Courses";
import { ContentCourses } from "./components/courses/ContentCourses";
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
    children: [
      {
        path: "/welcome/cursos",
        element: <WelcomeW />,
      },
      {
        path: "/welcome/biblioteca",
        element: <Library />,
      },
    ],
  },
  {
    path: "/info&cursos/:id",
    element: <InfoCourses />,
    children: [
      {
        path: "/info&cursos/:id/info",
        element: <Info />,
      },
    ],
  },
  {
    path: "/contenido&curso/:id",
    element: <Courses />,
    children: [
      {
        path: "/contenido&curso/:id/material",
        element: <ContentCourses />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <DataContextProvider>
    <RouterProvider router={router} />
  </DataContextProvider>
);
