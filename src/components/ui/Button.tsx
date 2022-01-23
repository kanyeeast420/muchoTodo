import React from "react";

interface ButtonProps {
  placeholder: string;
}

export const Button: React.FC<ButtonProps> = ({ placeholder }) => {
  return (
    <div className="button border-l-2 border-b-2 border-indigo-300">
      <button
        type="submit"
        className="w-full h-full bg-transparent p-6 text-2xl text-white md:text-4xl hover:bg-slate-600 transition-all ease-in-out duration-200"
      >
        <span>{placeholder}</span>
      </button>
    </div>
  );
};
