import React, { useState, useEffect } from "react";
import { Form } from "../UI/Form";
import { Feed } from "../Feed/Feed";
import { GetStaticProps } from "next";

interface LayoutProps {
  todos?: string[];
}

export const Layout: React.FC<LayoutProps> = ({ todos }) => {
  return (
    <div className="Layout flex flex-col w-full h-screen bg-slate-800">
      <Form />
      <Feed todos={todos} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("/api/todos");
  const todos = await res.json();

  return {
    props: {
      todos: todos,
    },
  };
};
