import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDoc from "./pages/ReactDoc";
import ViteDoc from "./pages/ViteDoc";
import CTAHome from "./components/CTAHome";
import SvelteDoc from "./pages/SvelteDoc";
import LaravelDoc from "./pages/LaravelDoc";
import MeteorDoc from "./pages/MeteorDoc";
import NuxtJsDoc from "./pages/NuxtJsDoc";
import PhoenixDoc from "./pages/PhoenixDoc";
import RemixDoc from "./pages/RemixDoc";
import RubyRailsDoc from "./pages/RubyRailsDoc";
import AdonisJsDoc from "./pages/AdonisJsDoc";
import AngularDoc from "./pages/AngularDoc";
import ReactRouter from "./pages/ReactRouter";
import Blogs from "./pages/Blogs";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CTAHome />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/react" element={<ReactDoc />} />
      <Route path="/vite" element={<ViteDoc />} />
      <Route path="/svelte" element={<SvelteDoc />} />
      <Route path="/laravel" element={<LaravelDoc />} />
      <Route path="/meteor" element={<MeteorDoc />} />
      <Route path="/nuxtJs" element={<NuxtJsDoc />} />
      <Route path="/phoenix" element={<PhoenixDoc />} />
      <Route path="/remix" element={<RemixDoc />} />
      <Route path="/rubyRails" element={<RubyRailsDoc />} />
      <Route path="/adonis" element={<AdonisJsDoc />} />
      <Route path="/angular" element={<AngularDoc />} />
      <Route path="/react-router" element={<ReactRouter />} />
      <Route path="/blogs" element={<Blogs />} />
    </Routes>
  </BrowserRouter>
);
