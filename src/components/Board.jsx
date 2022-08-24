import { useEffect } from "react";
import { useState } from "react";
import { BoardSquare } from "./BoardSquare";
import { Knight } from "./Knight";

export const Board = () => {
  const [[knightX, knightY], setKnightPosition] = useState([1, 6]);

  const moveKnight = (toX, toY) => {
    setKnightPosition([toX, toY]);
  };

  const canMoveKnight = (toX, toY) => {
    const dx = toX - knightX;
    const dy = toY - knightY;
    return (
      (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
      (Math.abs(dx) === 1 && Math.abs(dy) === 2)
    );
  };

  const squares = [];
  const renderSquare = (i) => {
    const x = i % 8;
    const y = Math.floor(i / 8);

    return (
      <div
        key={i}
        style={{
          width: "12.5%",
          height: "12.5%",
        }}
      >
        <BoardSquare
          x={x}
          y={y}
          moveKnight={moveKnight}
          canMoveKnight={canMoveKnight}
        >
          {x === knightX && y === knightY && <Knight />}
        </BoardSquare>
      </div>
    );
  };

  for (let index = 0; index < 64; index++) {
    squares.push(renderSquare(index));
  }
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {squares}
    </div>
  );
};
