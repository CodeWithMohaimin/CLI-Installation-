import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDoc from "./pages/ReactDoc";
import ViteDoc from "./pages/ViteDoc";
import CTAHome from "./components/CTAHome";
import SvelteDoc from "./pages/SvelteDoc";
import ReactRouter from "./pages/ReactRouter";
import Blogs from "./pages/Blogs";
import ErrorPage from "./pages/ErrorPage";
import Kratos from "./pages/Kratos";
import Portfolio from "./pages/Portfolio";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CTAHome />
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/" element={<App />} />
      <Route path="/react" element={<ReactDoc />} />
      <Route path="/vite" element={<ViteDoc />} />
      <Route path="/svelte" element={<SvelteDoc />} />
      <Route path="/react-router" element={<ReactRouter />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/kratos" element={<Kratos />} />
    </Routes>
  </BrowserRouter>
);
