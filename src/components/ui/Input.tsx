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
    <div className="input w-full border-b-2 border-indigo-300">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        title={title}
        autoComplete="off"
        className="w-full p-4 px-10 bg-transparent text-white lg:text-4xl text-2xl h-full"
        required
      />
    </div>
  );
};
