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
    <React.Fragment key={index}>{char[c]}</React.Fragment>
  ));

  return (
    <svg
      fill="none"
      viewBox="0 0 240 240"
      width="240"
      height="240"
      xmlns="http://www.w3.org/2000/svg"
    >
      <foreignObject
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/1999/xhtml"
      >
        <div className="font-bold text-lg text-white">{charToRender}</div>
      </foreignObject>
    </svg>
  );
}
