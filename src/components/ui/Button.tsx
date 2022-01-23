import React from "react";
import { BsArrowReturnLeft } from "react-icons/bs";

interface ButtonProps {
  placeholder: string;
}

export const Button: React.FC<ButtonProps> = ({ placeholder }) => {
  return (
    <div className="button border-l-2 border-b-2 border-slate-700">
      <button
        type="submit"
        className="w-full h-full bg-transparent p-6 text-2xl text-indigo-500 md:text-4xl lg:text-7xl hover:bg-slate-600 transition-all ease-in-out duration-500"
      >
        <BsArrowReturnLeft />
      </button>
    </div>
  );
};
