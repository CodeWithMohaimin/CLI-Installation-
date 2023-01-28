import React from "react";
import Data from "../data/data.json";

const Main = () => {
  return (
    <div className=" flex justify-center items-center flex-wrap p-2 gap-2 max-w-5xl m-auto w-full">
      {Data.map((data) => (
        <div
          className="bg-gray-500 max-w-md rounded-2xl p-4 hover:bg-gray-600 cursor-pointer flex gap-4"
          key={data.id}
        >
          <div>
            <img
              className="max-w-[60px] w-full rounded-full ring-teal-500 ring-2"
              src={data.icon}
              alt="icon"
            />
          </div>
          <div>
            <h2 className="text-gray-200 font-semibold text-xl ">
              {data.heading}
            </h2>
            <p className="text-gray-300 text-sm ">{data.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Main;
