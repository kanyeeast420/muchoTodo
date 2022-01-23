import React, { useEffect, useState } from "react";
import { Todo } from "../UI/Todo";

interface FeedProps {}

export const Feed: React.FC<FeedProps> = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("/api/todos")
      .then((res) => res.json())
      .then((res) => setTodos(res));
  }, []);

  return (
    <div className="Feed">
      {todos.map((todo) => (
        <Todo name={todo} key={todo} />
      ))}
    </div>
  );
};
