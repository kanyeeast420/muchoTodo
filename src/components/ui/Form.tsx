import React from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import { useState } from "react";
import Router from "next/router";
import { BsArrowReturnLeft } from "react-icons/bs";

interface FormProps {}

interface TodoFormTarget extends EventTarget {
  todoName: any;
  target: {
    todoName: string;
  };
}

export const Form: React.FC<FormProps> = () => {
  const [value, setValue] = useState({ todoName: "" });
  const [errors, setErrors] = useState({ todoName: "" });

  return (
    <form
      className="form flex flex-row transition-all ease-in duration-500"
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
          body: JSON.stringify({
            todoName: (e.target as TodoFormTarget).todoName.value,
          }),
        })
          .then((x) => x.json())
          .then(() => Router.reload())
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
      <Button type="submit">
        <BsArrowReturnLeft />
      </Button>
    </form>
  );
};
