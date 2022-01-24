import React from "react";
import Router from "next/router"

interface ButtonProps {
  type: "submit" | "reset" | "button" | undefined;
}

export const Button: React.FC<ButtonProps> = ({ type, children }) => {
  return (
    <div className="button border-l-2 border-b-2 border-slate-700">
      <button
        type={type}
        className="focus:animate-pulse w-full h-full bg-transparent p-6 text-2xl text-indigo-500 md:text-4xl lg:text-7xl hover:bg-slate-600 transition-all ease-in-out duration-500"
      >
        {children}
      </button>
    </div>
  );
};
