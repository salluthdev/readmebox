import { Result, SearchInput } from "@/components";
import Head from "next/head";
import Image from "next/image";
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
      <main className="wrapper">
        <div className="min-h-[90vh] py-4">
          <div className="flex items-center gap-2">
            <Image src={"/svg/logo.svg"} width={48} height={24} alt="" />
            <h1 className="font-bold text-[28px] text-white">ReadmeBox</h1>
          </div>
          <div className="flex flex-col gap-2">
            <SearchInput
              textOne={textOne}
              setTextOne={setTextOne}
              textTwo={textTwo}
              setTextTwo={setTextTwo}
            />
            <Result textOne={textOne} textTwo={textTwo} />
          </div>
        </div>
      </main>
    </>
  );
}
