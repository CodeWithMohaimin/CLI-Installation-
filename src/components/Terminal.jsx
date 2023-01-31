import React from "react";

const Terminal = () => {
  return (
    <div className="flex justify-center items-center mt-10 p-2">
      <div className="bg-gradient-to-tl from-violet-900 via-gray-900 to-gray-900 pl-4 py-4 max-w-xl w-full rounded-t-2xl rounded-b-md">
        <h1 className="border-b-2 border-gray-400 pb-2 text-xl md:text-2xl font-semibold text-gray-300 select-none">
          Create your project
        </h1>

        <p className="bg-gray-700 block px-4 py-1 mt-4 select-all">
          npx create-react-app ./
        </p>

        <p className="bg-gray-700 block px-4 py-1 mt-4 select-all">
          npm install -D tailwindcss
        </p>
        <p className="bg-gray-700 block px-4 py-1 mt-4 select-all">
          npx tailwindcss init
        </p>
      </div>
    </div>
  );
};

export default Terminal;
