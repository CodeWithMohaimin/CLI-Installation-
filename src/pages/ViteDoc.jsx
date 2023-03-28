import React from "react";
import Aside from "../components/Aside";

const ViteDoc = () => {
  return (
    <div className="flex">
      <Aside />
      {/* -------------------------- */}
      <div className="-z-10 bg-gradient-to-r from-gray-900 via-gray-500 to-gray-900 text-center sticky top-0 left-0 w-full">
        <h1 className="text-center text-blue-200 font-semibold text-3xl md:text-5xl py-4">
          Getting started with Vite
        </h1>

        <code>yarn create vite</code>
      </div>
    </div>
  );
};

export default ViteDoc;
