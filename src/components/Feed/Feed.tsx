import React, { useEffect, useState } from "react";
import { Todo } from "../ui/Todo";

interface FeedProps {}

interface Todo {
  _id: string;
  todoName: string;
  date: string;
}

export const Feed: React.FC<FeedProps> = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    fetch("/api/todos")
      .then((res) => res.json())
      .then((res) => setTodos(res));
  }, []);

  return (
    <div className="Feed grid grid-rows-2 h-full m-6 gap-5 scrollbar scrollbar-thumb-slate-500 scrollbar-track-slate-600">
      {todos.map((todo) => (
        <Todo name={todo.todoName} key={todo._id} _id={todo._id} />
      ))}
    </div>
  );
};
