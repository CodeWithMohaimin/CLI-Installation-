import React from "react";
import Aside from "../components/Aside";
import Data from "../data/kratos.json";

const kratos = () => {
  return (
    <div className="flex">
      <Aside />
      {/* -------------------------- */}{" "}
      <div className="-z-10 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 sticky top-0 left-0 w-full">
        <div className="flex justify-center items-center gap-3 text-white flex-wrap p-4 md:p-4">
          {Data.map((quote, index) => (
            <div
              key={index}
              className="bg-gray-800 my-1 md:my-4 px-4 py-2 md:p-4 rounded-lg hover:bg-gray-900 cursor-pointer"
            >
              <h3 className="text-gray-200 text-lg md:text-xl">
                {quote.title}
              </h3>
              <p className="text-gray-500 text-sm md:text-base">
                {quote.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default kratos;
