import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDoc from "./pages/ReactDoc";
import ViteDoc from "./pages/ViteDoc";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/react" element={<ReactDoc />} />
      <Route path="/vite" element={<ViteDoc />} />
    </Routes>
  </BrowserRouter>
);
