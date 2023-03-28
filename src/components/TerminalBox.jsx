import React from "react";
import Commands from "./Commands";

const TerminalBox = () => {
  return (
    <div className="flex justify-center items-center mt-10 p-2">
      <div className="bg-gradient-to-tl from-violet-900 via-gray-900 to-gray-900 pl-4 py-4 max-w-xl w-full rounded-t-2xl rounded-b-md">
        <h1 className="border-b-2 border-gray-400 pb-2 text-xl md:text-2xl font-semibold text-gray-300 select-none">
          Create your project
        </h1>
        <div>
          <Commands command="yarn create vite" />
          <Commands command="yarn" />
          <Commands command="yarn dev" />
        </div>
      </div>
    </div>
  );
};

export default TerminalBox;
