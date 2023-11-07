import React from "react";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const CTAHome = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[8vh] bg-gradient-to-r from-gray-900 via-gray-500 to-[#000] text-center sticky top-0 left-0 right-0 drop-shadow-2xl">
      <button
        title="GO TO HOME"
        className="mt-2 ml-2 pb-4 cursor-none text-white"
      >
        <BsArrowLeftSquareFill
          onClick={() => {
            navigate("/");
          }}
          className="text-white text-5xl cursor-pointer"
        />
        Back
      </button>
    </div>
  );
};

export default CTAHome;
