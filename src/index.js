import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import HomePage from "./Pages/HomePage";
import ProjectsPage from "./Pages/ProjectsPage";
import SkillsPage from "./Pages/SkillsPage";
import ErrorPage from "./Pages/ErrorPage";
import "./Style/main.scss";

const router = createBrowserRouter([
  {
    path: "/mon-portfolio",
    element: <HomePage />,
  },
  {
    path: "/mon-portfolio/about",
    element: <AboutPage />,
  },
  {
    path: "/mon-portfolio/skills",
    element: <SkillsPage />,
  },
  {
    path: "/mon-portfolio/projects",
    element: <ProjectsPage />,
  },
  {
    path: "/mon-portfolio/contact",
    element: <ContactPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
