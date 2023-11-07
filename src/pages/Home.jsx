import React from "react";
import Data from "../data/data.json";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className=" flex justify-center items-center flex-wrap gap-2 max-w-5xl m-auto w-full">
      {Data.map((data) => (
        <div
          onClick={() => {
            navigate(data.navigateUrl);
          }}
          className={
            "max-w-[360px] w-full rounded-lg p-4 delay-100 cursor-pointer flex gap-4 items-center hover:scale-105 duration-150 border-l-2 border-b-2  hover:bg-gradient-to-tr from-blue-800 to-[#192d70]"
          }
          key={data.id}
        >
          <div className="">
            <img
              className="max-w-[50px] w-full rounded-full ring-teal-500 ring-2"
              src={data.icon}
              alt="icon"
            />
          </div>
          <div className="">
            <h2 className="text-gray-200 font-semibold text-xl">
              {data.heading}
            </h2>
            <p className="text-gray-400 text-sm leading-4">
              {data.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
