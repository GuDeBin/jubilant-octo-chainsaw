import { useEffect } from "react";
import { useState } from "react";
import { BoardSquare } from "./BoardSquare";
import { Piece } from "./Piece";

const boardStyle = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexWrap: "wrap",
};

const squareStyle = {
  width: "12.5%",
  height: "12.5%",
};

export const Board = ({ game }) => {
  const [[knightX, knightY], setKnightPosition] = useState(game.knightPosition);

  useEffect(() => {
    game.observer(setKnightPosition);
  }, [game]);

  console.log(game);

  function renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    return (
      <div key={i} style={squareStyle}>
        <BoardSquare x={x} y={y} game={game}>
          <Piece isKnight={x === knightX && y === knightY} />
        </BoardSquare>
      </div>
    );
  }

  const squares = [];
  for (let i = 0; i < 64; i += 1) {
    squares.push(renderSquare(i));
  }

  return <div style={boardStyle}>{squares}</div>;
};
