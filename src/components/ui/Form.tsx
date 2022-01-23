import React from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import { useState } from "react";
import Router from "next/router";

interface Props {}

export const Form: React.FC<Props> = () => {
  const [value, setValue] = useState({ todoName: "" });
  const [errors, setErrors] = useState({ todoName: "" });

  return (
    <form
      className="form flex flex-row "
      onSubmit={(e) => {
        e.preventDefault();
        const newErrors = { todoName: "" };
        let hasError = false;

        if (hasError) {
          setErrors(newErrors);
          return;
        }

        fetch("/api/add-todo", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ todoName: e.target.todoName.value }),
        })
          .then((x) => x.json())
          .catch((err) => {
            setErrors({ todoName: "internal Error" });
          });

        Router.push("/");
      }}
    >
      <Input
        title="todoName"
        name="todoName"
        placeholder="New todo"
        type="text"
      />
      <Button placeholder="Go" />
    </form>
  );
};
