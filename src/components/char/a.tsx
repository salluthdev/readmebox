import { CSSProperties } from "react";

type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";

export default function A() {
  const charContainer: CSSProperties & { flexDirection: FlexDirection } = {
    display: "flex",
    flexDirection: "column",
    gap: "3px",
  };
  const line = {
    display: "flex",
    gap: "3px",
  };
  const box = {
    width: "11px",
    height: "11px",
    background: "#3aad52",
    borderRadius: "2px",
  };
  const emptyBox = {
    width: "11px",
    height: "11px",
  };

  return (
    <div style={charContainer}>
      <div style={line}>
        <span style={emptyBox} />
        <span style={box} />
        <span style={box} />
        <span style={box} />
        <span style={emptyBox} />
        <span style={emptyBox} />
      </div>
      <div style={line}>
        <span style={box} />
        <span style={box} />
        <span style={box} />
        <span style={box} />
        <span style={box} />
        <span style={emptyBox} />
      </div>
      <div style={line}>
        <span style={box} />
        <span style={box} />
        <span style={emptyBox} />
        <span style={box} />
        <span style={box} />
        <span style={emptyBox} />
      </div>
      <div style={line}>
        <span style={box} />
        <span style={box} />
        <span style={box} />
        <span style={box} />
        <span style={box} />
        <span style={emptyBox} />
      </div>
      <div style={line}>
        <span style={box} />
        <span style={box} />
        <span style={box} />
        <span style={box} />
        <span style={box} />
        <span style={emptyBox} />
      </div>
      <div style={line}>
        <span style={box} />
        <span style={box} />
        <span style={emptyBox} />
        <span style={box} />
        <span style={box} />
        <span style={emptyBox} />
      </div>
      <div style={line}>
        <span style={box} />
        <span style={box} />
        <span style={emptyBox} />
        <span style={box} />
        <span style={box} />
        <span style={emptyBox} />
      </div>
      <div style={line}>
        <span style={box} />
        <span style={box} />
        <span style={emptyBox} />
        <span style={box} />
        <span style={box} />
        <span style={emptyBox} />
      </div>
    </div>
  );
}
