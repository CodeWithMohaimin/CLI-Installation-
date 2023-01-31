import React from "react";
import { GoAlert } from "react-icons/go";
import Aside from "../components/Aside";

const ReactDoc = () => {
  return (
    <div className="flex">
      <Aside />
      {/* // ------------------------------------ */}
      <div className="min-h-[92vh] bg-gradient-to-r from-gray-900 via-gray-500 to-gray-900 text-gray-300 p-2 w-full">
        <h1 className="font-semibold text-3xl md:text-5xl py-4 md:py-6 text-center select-none">
          Create React App With{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-red-100 to-indigo-400">
            Tailwind CSS
          </span>
        </h1>

        <div className="bg-orange-200 text-gray-700 max-w-xl rounded-lg m-auto select-none">
          <span className="flex justify-center py-2">
            <GoAlert className="text-2xl" />
          </span>
          <p className="text-base font-bold pl-3">
            Create React App does not support custom PostCSS configurations and
            is incompatible with many important tools in the PostCSS ecosystem,
            like `postcss-import`.
          </p>
          <p className="text-sm pb-4 mt-2 pl-3">
            We <span className="font-bold">highly recommend</span> using
            <span className="font-bold"> Vite,Parcel,Next.js</span>, or{" "}
            <span className="font-bold">Remix</span> instead of Create React
            App. They provide an equivalent or better developer experience but
            with more flexibility, giving you more control over how Tailwind and
            PostCSS are configured.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReactDoc;
