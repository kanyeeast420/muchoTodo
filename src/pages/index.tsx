import Head from "next/head";
import Link from "next/link";
import { Layout } from "../components/Layout/Layout";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full h-full">
      <Head>
        <title>muchoTodo</title>
      </Head>

      <Layout />

      <footer className="bg-slate-800 text-indigo-200 text-md text-center p-10 border-t-2 border-indigo-200">
        <span>Always keep track of your todos</span>
      </footer>
    </div>
  );
}
