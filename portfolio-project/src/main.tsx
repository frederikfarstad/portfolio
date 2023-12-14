import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/App.tsx";
import "./index.css";
import Resume from "./pages/Resume.tsx";
import Projects from "./pages/Projects.tsx";
import FallbackPage from "./pages/FallBackPage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<FallbackPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
