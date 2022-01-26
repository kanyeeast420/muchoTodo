import Head from "next/head";
import { Form } from "../components/ui/Form";
import { Feed } from "../components/Feed/Feed";

export default function Home() {
  return (
    <div className="Layout flex flex-col !w-full !max-w-full h-full bg-slate-800 scrollbar scrollbar-thumb-slate-500 scrollbar-track-slate-600">
      <Head>
        <title>muchoTodo</title>
        <link rel="icon" href="../public/favicon.ico" type="image/x-icon" />
        <meta name="theme-color" content="#6366f1" />

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
        <link
          rel="preload"
          href="../public/fonts/Monaco.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>

      <Form />
      <Feed />
    </div>
  );
}
