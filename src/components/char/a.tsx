export default function A() {
  const dotStyle = {
    width: "11px",
    height: "11px",
    backgroundColor: "#3aad52",
    borderRadius: "2px",
  };

  const emptyDotStyle = {
    width: "11px",
    height: "11px",
  };

  const dotRowStyle = {
    display: "flex",
    gap: "3px",
  };

  const dotContainerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "3px",
  };

  return (
    <div style={dotContainerStyle}>
      <div style={dotRowStyle}>
        <span style={dotStyle}></span>
        <span style={dotStyle}></span>
        <span style={dotStyle}></span>
        <span style={emptyDotStyle}></span>
      </div>
      <div style={dotRowStyle}>
        <span style={dotStyle}></span>
        <span style={emptyDotStyle}></span>
        <span style={dotStyle}></span>
        <span style={emptyDotStyle}></span>
      </div>
      <div style={dotRowStyle}>
        <span style={dotStyle}></span>
        <span style={dotStyle}></span>
        <span style={dotStyle}></span>
        <span style={emptyDotStyle}></span>
      </div>
      <div style={dotRowStyle}>
        <span style={dotStyle}></span>
        <span style={emptyDotStyle}></span>
        <span style={dotStyle}></span>
        <span style={emptyDotStyle}></span>
      </div>
    </div>
  );
}
