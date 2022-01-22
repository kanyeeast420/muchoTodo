import React from "react";
import { Todo } from "../ui/Todo";

interface FeedProps {
  todos: Array<string>;
}

export const Feed: React.FC<FeedProps> = ({ todos }) => {
  return (
    <div className="Feed">
      {todos.map((todo) => (
        <Todo name={todo} />
      ))}
    </div>
  );
};
