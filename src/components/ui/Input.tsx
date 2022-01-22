import React from "react";

interface InputProps {
  placeholder: string;
  type: string;
  title: string;
}

export const Input: React.FC<InputProps> = ({ placeholder, type, title }) => {
  return (
    <div className="input w-full border-b-2 border-slate-600">
      <input
        type={type}
        placeholder={placeholder}
        name={title}
        title={title}
        autoComplete="off"
        className="w-full p-4 px-10 bg-slate-800 text-white text-5xl"
        required
      />
    </div>
  );
};
