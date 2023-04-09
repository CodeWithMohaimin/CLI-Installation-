import React from "react";
import Aside from "../components/Aside";
import Data from "../data/kratos.json";

const kratos = () => {
  return (
    <div className="flex">
      <Aside />
      {/* -------------------------- */}{" "}
      <div className="-z-10 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 sticky top-0 left-0 w-full">
        <div className="flex justify-center items-center gap-3 text-white flex-wrap">
          {Data.map((quote, index) => (
            <div
              key={index}
              className="bg-gray-800 my-4 p-4 rounded-lg hover:bg-gray-900 cursor-pointer"
            >
              <h3 className="text-gray-200">{quote.title}</h3>
              <p className="text-gray-400">{quote.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default kratos;
