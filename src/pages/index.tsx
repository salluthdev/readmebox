import Head from "next/head";

export default function Home() {
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
        </div>
      </main>
    </>
  );
}
