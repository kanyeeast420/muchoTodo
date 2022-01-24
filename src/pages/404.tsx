import React from "react";
import Router from "next/router";
import { Button } from "../components/ui/Button";

export default class ErrorPage extends React.Component {
  render() {
    return (
      <div className="flex flex-col w-full h-screen items-center justify-center bg-slate-800 text-5xl text-white">
        <span className="mb-6 text-red-500">404 - Error</span>
        <button
          onClick={() => {
            Router.push("/");
          }}
          className="border-2 flex items-center justify-center h-fit border-slate-600 hover:bg-slate-700 transition-all ease-in-out duration-200"
        >
          <span className="text-3xl px-10 py-5">Get back Home</span>
        </button>
      </div>
    );
  }
}
