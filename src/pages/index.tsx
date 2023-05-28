import { Result, SearchInput } from "@/components/pages/app";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [textOne, setTextOne] = useState<string>("NAME");
  const [textTwo, setTextTwo] = useState<string>("TITLE");

  return (
    <>
      <Head>
        <title>ReadmeBox - Make Your Github Cool with SVG Boxes</title>
        <meta
          name="description"
          content="Make Your Github Cool with SVG Boxes"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col gap-2">
        <SearchInput
          textOne={textOne}
          setTextOne={setTextOne}
          textTwo={textTwo}
          setTextTwo={setTextTwo}
        />
        <Result textOne={textOne} textTwo={textTwo} />
      </div>
    </>
  );
}
