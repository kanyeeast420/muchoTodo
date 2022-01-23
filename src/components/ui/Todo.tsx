import React from "react";
import { MdDeleteOutline } from "react-icons/md";

interface TodoProps {
  name: string;
  _id: string;
}

export const Todo: React.FC<TodoProps> = ({ name, _id }) => {
  return (
    <div className="todo text-white lg:px-24 lg:py-10 p-2 h-full w-full text-base md:text-2xl lg:text-3xl border-2 border-slate-700 rounded flex flex-col items-center justify-center text-center">
      <span>{name}</span>
      <div className="flex flex-row text-base items-center justify-center pt-4">
        <span className="text-indigo-200 text-sm text-center px-5 font-code">
          ID: {_id}
        </span>
        <span className="rounded bg-indigo-500 hover:bg-indigo-400 p-3 cursor-pointer transition-all ease-in-out duration-500">
          <MdDeleteOutline />
        </span>
      </div>
    </div>
  );
};
