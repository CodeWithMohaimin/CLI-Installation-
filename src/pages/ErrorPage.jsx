import React from "react";
import ErrorImage from "../images/error.png";

const ErrorPage = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-500 to-gray-900 h-[92vh] select-none">
      <div className="flex justify-center items-center mx-auto max-w-3xl w-full hover:cursor-not-allowed">
        <img
          className="w-full max-w-3xl w-ful"
          src={ErrorImage}
          alt="error gf"
        />
      </div>
    </div>
  );
};

export default ErrorPage;
