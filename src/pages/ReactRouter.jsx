import React from "react";
import Aside from "../components/Aside";
import Commands from "../components/Commands";

const ReactRouter = () => {
  return (
    <div className="flex">
      <Aside />
      {/* -------------------------- */}
      <div className="-z-10 bg-gradient-to-r from-gray-900 via-gray-500 to-gray-900 sticky top-0 left-0 w-full">
        <h1 className="select-none text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-500 font-semibold text-2xl md:text-5xl py-4 px-2">
          React Router is most popular for routing SPA Pages
        </h1>
        <div className="flex justify-center items-center mt-10 p-2 select-all">
          <div className="bg-gradient-to-tl from-violet-900 via-gray-900 to-gray-900 pl-4 py-4 max-w-xl w-full rounded-t-2xl rounded-b-md">
            <h1 className="border-b-2 border-gray-400 pb-2 text-xl md:text-2xl font-semibold text-gray-300">
              Install react-router on CLI
            </h1>
            <Commands command="npm install react-router-dom" />
            <p className="text-gray-400">Or</p>
            <Commands command="yarn add react-router-dom" />
          </div>
        </div>

        <div className=" max-w-2xl mx-auto pl-4 py-4 bg-gray-600 rounded-xl mt-10 md:mt-20">
          <h3 className="py-2 border-double border-b-4 border-gray-500 mb-4 text-xl text-gray-300 select-none">
            Then write your code like in below in your App js or index.js
          </h3>
          <code className="text-teal-400 select-all">{`import {BrowserRouter , Routes , Route} from 'react-router-dom'`}</code>
          <br />
          <code className="text-teal-200"> {`<BrowserRouter>`}</code>
          <br />
          <code className="ml-4 text-red-300">{`<Routes>`}</code>
          <br />
          <code className="ml-8 text-blue-300">{`<Route exact path='/' element={<Home/>} />`}</code>
          <br />
          <code className="ml-8 text-blue-300">{` <Route exact path='/login' element={<Login/>} />`}</code>
          <br />
          <code className="ml-8 text-blue-300">{`<Route exact path='/signup' element={<Signup/>} />`}</code>
          <br />
          <code className="ml-4 text-red-300">{`</Routes>`}</code>
          <br />
          <code className="text-teal-300">{` </BrowserRouter>`}</code>
          <br />
        </div>
      </div>
    </div>
  );
};

export default ReactRouter;
