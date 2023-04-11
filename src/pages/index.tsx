import { Result, SearchInput } from "@/components";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [textOne, setTextOne] = useState<string>("");
  const [textTwo, setTextTwo] = useState<string>("");

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
      <main className="wrapper">
        <div className="min-h-[90vh] py-4">
          <h1 className="font-bold text-[28px] text-white">ReadmeBox</h1>
          <div className="flex flex-col gap-2">
            <SearchInput
              textOne={textOne}
              setTextOne={setTextOne}
              textTwo={textTwo}
              setTextTwo={setTextTwo}
            />
            <Result textOne={textOne} />
          </div>
        </div>
      </main>
    </>
  );
}
