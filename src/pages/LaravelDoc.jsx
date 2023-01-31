import React from "react";
import Aside from "../components/Aside";

const LaravelDoc = () => {
  return (
    <div className="flex">
      <Aside />
      {/* -------------------------- */}
      <div className="-z-10 bg-gradient-to-r from-gray-900 via-gray-500 to-gray-900 text-center sticky top-0 left-0 w-full">
        <h1>Laravel</h1>
      </div>
    </div>
  );
};

export default LaravelDoc;
