import React from "react";
import Square from "./Square";

function BoardSquare({ x, y, children }) {
  const black = (x + y) % 2 === 1;
  return <Square black={black}>{children}</Square>;
}

export default BoardSquare;
