import React from "react";

interface TodoProps {
  name: string;
}

export const Todo: React.FC<TodoProps> = ({ name }) => {
  return (
    <div className="todo">
      <span>{name}</span>
    </div>
  );
};
