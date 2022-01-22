import React, { useState, useEffect } from "react";
import { Form } from "../ui/Form";
import { Feed } from "../Feed/Feed";

export const Layout: React.FC = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("/api/todos")
      .then((x) => JSON.stringify(x))
      .then((x) => setTodos(x));
  }, []);

  return (
    <div className="layout bg-slate-800 w-full h-screen">
      <Form />
      <Feed todos={todos} />
    </div>
  );
};
