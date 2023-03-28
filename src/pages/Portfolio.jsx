import React from "react";
import Aside from "../components/Aside";
import PortfolioData from "../data/portfolio.json";

const Portfolio = () => {
  return (
    <div className="flex">
      <Aside />
      {/* -------------------------- */}
      <div className="-z-10 bg-gradient-to-r from-gray-900 via-gray-500 to-gray-900 text-center sticky top-0 left-0 w-full">
        <div className="flex gap-2 mt-10 flex-wrap mx-auto justify-center">
          {PortfolioData.map((portfolio) => (
            <div key={portfolio.id} className=" bg-red-300 ">
              <div className="w-96 h-52 bg-red-200 m-1"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
