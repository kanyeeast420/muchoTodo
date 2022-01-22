import React from "react";
import { Todo } from "../UI/Todo";

interface FeedProps {
  todos: string[];
}

export const Feed: React.FC<FeedProps> = ({ todos }) => {
  return (
    <div className="Feed">
      {todos.map((todo) => (
        <Todo name={todo} key={todo} />
      ))}
    </div>
  );
};
