import { A, B } from "@/components";
import Head from "next/head";
import React, { useState } from "react";

interface charType {
  [key: string]: JSX.Element;
}

const char: charType = {
  A: <A />,
  B: <B />,
};

export default function Home() {
  const [text, setText] = useState("");
  const charToRender = Array.from(text).map((c, index) => (
    <React.Fragment key={index}>{char[c]}</React.Fragment>
  ));

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
          <input
            type="text"
            placeholder="YOUR TEXT"
            value={text}
            onChange={(e) => setText(e.target.value.toUpperCase())}
            className="w-full font-bold rounded-sm outline-none p-2 mt-1"
          />
          <div className="font-bold text-lg text-white">{charToRender}</div>
        </div>
      </main>
    </>
  );
}
