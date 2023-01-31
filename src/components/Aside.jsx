import React from "react";
import Data from "../data/data.json";
import { useNavigate } from "react-router-dom";

const Aside = () => {
  const navigate = useNavigate();
  return (
    <div className=" lg:flex hidden lg:flex-col gap-2 p-2 md:p-4 bg-gradient-to-r from-gray-700 via-[#5e93e4] to-[#444] border-r-2 border-[#5e93e4] min-h-[92vh] top-[8vh] left-0 max-w-sm w-full">
      {Data.map((data) => (
        <div
          onClick={() => {
            navigate(data.navigateUrl);
          }}
          className="bg-gray-800 max-w-xs rounded-lg p-4 delay-100 hover:bg-gray-700 cursor-pointer flex gap-4 items-center hover:scale-105 duration-150 border-l-2 border-b-2 border-gray-700"
          key={data.id}
        >
          <div className="basis-1/5">
            <img
              className="max-w-[50px] w-full rounded-full ring-teal-500 ring-2"
              src={data.icon}
              alt="icon"
            />
          </div>
          <div className="basis-4/5">
            <h2 className="text-gray-200 font-semibold text-xl">
              {data.heading}
            </h2>
            <p className="text-gray-300 text-sm leading-4">
              {data.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Aside;
