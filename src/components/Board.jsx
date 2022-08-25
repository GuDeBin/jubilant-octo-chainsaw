import { useEffect } from "react";
import { useState } from "react";
import { BoardSquare } from "./BoardSquare";
import { Knight } from "./Knight";

export const Board = ({ game }) => {
  const [[knightX, knightY], setKnightPosition] = useState(game.knightPosition);

  useEffect(() => game.observer(setKnightPosition), [game]);

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
        <BoardSquare x={x} y={y} game={game}>
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
