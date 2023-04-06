import React from "react";
import { A, B } from "./char";

interface ResultProps {
  text: string;
}

interface charType {
  [key: string]: JSX.Element;
}

const char: charType = {
  A: <A />,
  B: <B />,
};

export default function Result({ text }: ResultProps) {
  const charToRender = Array.from(text).map((c, index) => (
    <React.Fragment key={index}>
      {char[c]}
      {c === " " && <span>&nbsp;</span>}
    </React.Fragment>
  ));

  return (
    <div className="flex justify-end">
      <svg
        fill="none"
        viewBox="0 0 480 240"
        width="480"
        xmlns="http://www.w3.org/2000/svg"
      >
        <foreignObject
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/1999/xhtml"
        >
          <div className="h-full flex flex-wrap justify-center items-center bg-[#0d1117] rounded p-[3px]">
            <div className="font-bold text-lg text-center break-all text-white">
              {charToRender}
            </div>
          </div>
        </foreignObject>
      </svg>
    </div>
  );
}
