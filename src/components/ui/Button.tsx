import React from "react";

interface ButtonProps {
  placeholder: string;
}

export const Button: React.FC<ButtonProps> = ({ placeholder }) => {
  return (
    <div className="button border-l-2 border-b-2 border-slate-600">
      <button
        type="submit"
        className="w-full h-full bg-slate-800 px-24 text-white text-5xl hover:bg-slate-700 transition-all ease-in-out duration-200"
      >
        <span>{placeholder}</span>
      </button>
    </div>
  );
};
