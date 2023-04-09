import React from "react";
import Aside from "../components/Aside";
// import Commands from "../components/Commands";
import TerminalBox from "../components/TerminalBox";
import Commands from "../components/Commands";

const ViteDoc = () => {
  // const viteCommands = [
  //   {
  //     id: 1,
  //     text: "yarn create vite",
  //   },
  //   {
  //     id: 2,
  //     text: "yarn",
  //   },
  //   {
  //     id: 3,
  //     text: "yarn dev",
  //   },
  // ];
  return (
    <div className="flex">
      <Aside />
      {/* -------------------------- */}
      <div className="-z-10 bg-gradient-to-r from-gray-900 via-gray-500 to-gray-900 text-center sticky top-0 left-0 w-full">
        <h1 className="text-center text-blue-200 font-semibold text-3xl md:text-5xl py-4">
          Getting started with Vite
        </h1>
        <Commands command="yarn create vite" />
        <TerminalBox command={Commands} />
      </div>
    </div>
  );
};

export default ViteDoc;
