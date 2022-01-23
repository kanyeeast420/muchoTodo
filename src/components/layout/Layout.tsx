import React from "react";
import { Form } from "../UI/Form";
import { Feed } from "../Feed/Feed";

interface LayoutProps {
  todos?: string[];
}

export const Layout: React.FC<LayoutProps> = ({ todos }) => {
  return (
    <div className="Layout flex flex-col w-full h-screen bg-slate-800">
      <Form />
      <Feed />
    </div>
  );
};
