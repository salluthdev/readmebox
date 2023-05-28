import Head from "next/head";

interface SeoMetaProps {
  title?: string;
}

export default function SeoMeta({ title }: SeoMetaProps) {
  const pageTitle = title
    ? `${title} | ReadmeBox - Make Your Github Cool with SVG Boxes`
    : "ReadmeBox - Make Your Github Cool with SVG Boxes";

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content="Make Your Github Cool with SVG Boxes" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/svg/logo.svg" />
    </Head>
  );
}
