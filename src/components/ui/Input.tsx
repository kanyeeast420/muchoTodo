import React from "react";

interface InputProps {
  placeholder: string;
  type: string;
  title: string;
  name: string;
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  type,
  title,
  name,
}) => {
  return (
    <div className="input w-full border-b-2 border-slate-700 transition-all ease-in duration-500">
      <input
        type={type}
        placeholder={placeholder}
        autoFocus
        name={name}
        title={title}
        autoComplete="off"
        className="w-full p-4 px-10 bg-transparent transition-all ease-in duration-500 text-white placeholder:text-indigo-400 lg:text-7xl text-2xl h-full"
        required
      />
    </div>
  );
};
