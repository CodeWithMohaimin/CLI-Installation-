import React from "react";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const CTAHome = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[8vh] bg-gradient-to-r from-gray-900 via-gray-500 to-gray-900  text-center sticky top-0 left-0">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="mt-2 ml-2 pb-4"
      >
        <BsArrowLeftSquareFill className="text-white text-5xl" />
      </button>
    </div>
  );
};

export default CTAHome;
