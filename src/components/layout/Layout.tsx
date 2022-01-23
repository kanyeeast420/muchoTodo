import React from "react";
import { Form } from "../ui/Form";
import { Feed } from "../feed/Feed";

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = () => {
  return (
    <div className="Layout flex flex-col w-full min-h-screen h-full bg-slate-800 scrollbar scrollbar-thumb-slate-500 scrollbar-track-slate-600">
      <Form />
      <Feed />
    </div>
  );
};
