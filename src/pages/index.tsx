import { SeoMeta } from "@/components/common/seo-meta";
import { Result, SearchInput } from "@/components/pages/home";
import { useState } from "react";

export default function Home() {
  const [textOne, setTextOne] = useState<string>("NAME");
  const [textTwo, setTextTwo] = useState<string>("TITLE");

  return (
    <>
      <SeoMeta />
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
