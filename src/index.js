import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import CTA from "./components/CTAHome";

// template pages
import Template1 from "./pages/ETemplate1";
import Template2 from "./pages/Template2";
import Template3 from "./pages/Template3";
import Template4 from "./pages/Template4";
import Template5 from "./pages/Template5";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CTA />
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/" element={<App />} />
      <Route path="/template1" element={<Template1 />} />
      <Route path="/template2" element={<Template2 />} />
      <Route path="/template3" element={<Template3 />} />
      <Route path="/template4" element={<Template4 />} />
      <Route path="/template5" element={<Template5 />} />
    </Routes>
  </BrowserRouter>
);
