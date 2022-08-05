import React from "react";
import Knight from "./Knight";
import BoardSquare from "./BoardSquare";

export default function Board({ knightPosition, moveKnight }) {
  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition, moveKnight));
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
}

function renderSquare(i, knightPosition, moveKnight) {
  const x = i % 8;
  const y = Math.floor(i / 8);

  return (
    <div
      key={i}
      style={{
        width: "12.5%",
        height: "12.5%",
      }}
      onClick={() => moveKnight(x, y)}
    >
      <BoardSquare x={x} y={y}>
        {renderPiece(x,y,knightPosition)}
      </BoardSquare>
    </div>
  );
}

function renderPiece(x,y,[knightX,knightY]){
  if(x===knightX && y===knightY){
    return<Knight/>
  }
}
