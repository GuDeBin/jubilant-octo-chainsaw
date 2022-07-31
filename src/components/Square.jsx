import React from "react";

function Square({ black, children }) {
  const fill = black ? "black" : "white";
  const storke = black ? "white" : "black";

  return (
    <div
      style={{
        backgroundColor: fill,
        color: storke,
        width: "100%",
        height: "100%",
      }}
    >
      {children}
    </div>
  );
}

export default Square;
