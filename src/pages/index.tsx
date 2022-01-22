import Head from "next/head";
import Link from "next/link";
import { Layout } from "../components/layout/Layout";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Head>
        <title>muchoTodo</title>
      </Head>
      
      <Layout />
    </div>
  );
}
