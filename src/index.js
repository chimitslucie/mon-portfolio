import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { HashRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import HomePage from "./Pages/HomePage";
import ProjectsPage from "./Pages/ProjectsPage";
import SkillsPage from "./Pages/SkillsPage";
import ErrorPage from "./Pages/ErrorPage";
import "./Style/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/skills" element={<SkillsPage />} />
        <Route exact path="/projects" element={<ProjectsPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </HashRouter>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
