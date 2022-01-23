import React from "react";
import { MdDeleteOutline } from "react-icons/md";

interface TodoProps {
  name: string;
  _id: string;
}

export const Todo: React.FC<TodoProps> = ({ name, _id }) => {
  return (
    <div className="todo text-white lg:px-24 lg:py-10 p-2 h-full w-full text-base md:text-2xl lg:text-3xl border-2 border-indigo-200 rounded flex flex-col items-center justify-center text-center">
      <span>{name}</span>
      <span className="text-indigo-200 text-xs pt-4">ID: {_id}</span>
    </div>
  );
};
