import React, { useEffect, useRef, useState } from "react";
import {
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
  P,
  Q,
  R,
  S,
  T,
  U,
  V,
  W,
  X,
} from "./char";
import { Background, DoubleCat, Logo } from "./result-components";
import Y from "./char/y";
import Z from "./char/z";
interface ResultProps {
  textOne: string;
  textTwo: string;
}

interface charType {
  [key: string]: {
    component: JSX.Element;
    width: number;
  };
}

const char: charType = {
  A: { component: <A />, width: 6 },
  B: { component: <B />, width: 6 },
  C: { component: <C />, width: 6 },
  D: { component: <D />, width: 6 },
  E: { component: <E />, width: 5 },
  F: { component: <F />, width: 5 },
  G: { component: <G />, width: 7 },
  H: { component: <H />, width: 6 },
  I: { component: <I />, width: 3 },
  J: { component: <J />, width: 3 },
  K: { component: <K />, width: 7 },
  L: { component: <L />, width: 5 },
  M: { component: <M />, width: 8 },
  N: { component: <N />, width: 7 },
  O: { component: <O />, width: 7 },
  P: { component: <P />, width: 6 },
  Q: { component: <Q />, width: 6 },
  R: { component: <R />, width: 6 },
  S: { component: <S />, width: 6 },
  U: { component: <U />, width: 6 },
  T: { component: <T />, width: 5 },
  V: { component: <V />, width: 7 },
  W: { component: <W />, width: 9 },
  X: { component: <X />, width: 8 },
  Y: { component: <Y />, width: 7 },
  Z: { component: <Z />, width: 7 },
};

export default function Result({ textOne, textTwo }: ResultProps) {
  const [textOneWidth, setTextOneWidth] = useState<number>(0);
  const [textTwoWidth, setTextTwoWidth] = useState<number>(0);
  const svgRef = useRef<SVGSVGElement>(null);

  // render char component based on input value
  const renderText = (text: string) => {
    return Array.from(text).map((c, index) => (
      <React.Fragment key={index}>{char[c]?.component || c}</React.Fragment>
    ));
  };

  // calc the text width
  const calculateTextWidth = (text: string) => {
    return Array.from(text).reduce(
      (width, c) => width + (char[c]?.width || 0),
      0
    );
  };

  useEffect(() => {
    setTextOneWidth(calculateTextWidth(textOne));
  }, [textOne]);

  useEffect(() => {
    setTextTwoWidth(calculateTextWidth(textTwo));
  }, [textTwo]);

  // download the svg box
  const handleDownloadClick = () => {
    if (!svgRef.current) return;
    const svgString = new XMLSerializer().serializeToString(svgRef.current);
    const svgBlob = new Blob([svgString], { type: "image/svg+xml" });
    const svgUrl = URL.createObjectURL(svgBlob);
    const downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = "readmebox.svg";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(svgUrl);
  };

  return (
    <>
      <div className="flex bg-[#0d1117] rounded p-[3px] max-sm:p-[2px]">
        <svg
          ref={svgRef}
          fill="none"
          viewBox="0 0 837 221"
          width={837}
          xmlns="http://www.w3.org/2000/svg"
        >
          <foreignObject
            width="837px"
            height="100%"
            xmlns="http://www.w3.org/1999/xhtml"
          >
            <style>
              {`
              .container {
                width: 837px;
                height: 221px;
                position: relative;
              }
              .bg {
                position: absolute;
                top: 0;
                left: 0;
                display: flex;
                flex-direction: column;
                gap: 3px;
                background: #0d1117;
              }
              .bg .line {
                display: flex;
                gap: 3px;
              }
              .bg span {
                width: 11px;
                height: 11px;
                background: #161b22;
                border-radius: 2px;
              }
              .char-container {
                display: flex;
                flex-direction: column;
                gap: 3px;
              }
              .char-container .line {
                display: flex;
                gap: 3px;
              }
              .char-container .line .box {
                width: 11px;
                height: 11px;
                border-radius: 2px;
              }
              .char-container .line .box.active {
                background: #3aad52;
              }
              .content {
                width: 100%;
                height: 100%;
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1;
              }
              .content .blank {
                width: 11px;
              }
              .content .slide {
                width: 100%;
                height: 100%;
                position: fixed;
                top: 0;
                left: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 3px;
              }
              .content .slide.slide-1 {
                animation: anim-slide-1 8s infinite;
              }
              @keyframes anim-slide-1 {
                0%, 40%, 100% {
                  transform: scale(0.2) translateY(40px);
                }
                4%, 16% {
                  transform: scale(1) translateY(0);
                }
                16% {
                  opacity: 1;
                }
                20%, 100% {
                  opacity: 0;
                }
              }
              .content .slide.slide-2 {
                opacity: 0;
                animation: anim-slide-2 8s infinite;
              }
              @keyframes anim-slide-2 {
                0%, 20%, 100% {
                  transform: scale(0.2) translateY(40px);
                  opacity: 0;
                }
                24%, 36% {
                  transform: scale(1) translateY(0);
                }
                36% {
                  opacity: 1;
                }
                40%, 100% {
                  opacity: 0;
                }
                60% {
                  transform: scale(0.2) translateY(40px);
                }
              }
              .content .slide.slide-3 {
                opacity: 0;
                animation: anim-slide-3 8s infinite;
              }
              @keyframes anim-slide-3 {
                0%, 40%, 72%, 100% {
                  opacity: 0;
                }
                44%, 68% {
                  opacity: 1;
                }
              }
              .content .slide.slide-4 {
                opacity: 0;
                animation: anim-slide-4 8s infinite;
              }
              @keyframes anim-slide-4 {
                0%, 72%, 92%, 100% {
                  opacity: 0;
                }
                76%, 88% {
                  opacity: 1;
                }
              }
              `}
            </style>
            <div className="container">
              <Background />
              <div className="content">
                <div className="slide slide-1">
                  {textOneWidth % 2 === 1 && <div className="blank" />}
                  {renderText(textOne)}
                </div>
                <div className="slide slide-2">
                  {textTwoWidth % 2 === 1 && <div className="blank" />}
                  {renderText(textTwo)}
                </div>
                <div className="slide slide-3">
                  <DoubleCat />
                </div>
                <div className="slide slide-4">
                  <Logo />
                </div>
              </div>
            </div>
          </foreignObject>
        </svg>
      </div>
      <button
        className="font-bold underline underline-offset-2 text-white"
        onClick={handleDownloadClick}
      >
        Download SVG
      </button>
    </>
  );
}
