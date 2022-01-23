import Head from "next/head";
import Link from "next/link";
import { Layout } from "../components/layout/Layout";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full h-full">
      <Head>
        <title>muchoTodo</title>
        <link
          rel="preload"
          href="../public/fonts/IntegralCF-Bold.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="../public/fonts/IntegralCF-Medium.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="../public/fonts/IntegralCF-Regular.otf"
          as="font"
          crossOrigin=""
        />
      </Head>

      <Layout />
    </div>
  );
}
