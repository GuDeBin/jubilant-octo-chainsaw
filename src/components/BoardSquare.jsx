import React from "react";
import Square from "./Square";
import { ItemTypes } from "../Constants";
import { useDrop } from "react-dnd";

function BoardSquare({ x, y, children }) {
  const black = (x + y) % 2 === 1;
  const hello = "hello world";
  return <Square black={black}>{children}</Square>;
}

export default BoardSquare;
