import { useState } from "react";
import Board from "./components/Board";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function App() {
  const [knightPosition, setKnightPosition] = useState([0, 6]);

  const moveKnight = (toX, toY) => {
    if (canMoveKnight(toX, toY)) {
      setKnightPosition([toX, toY]);
    }
  };

  const canMoveKnight = (toX, toY) => {
    const [x, y] = knightPosition;
    const dx = toX - x;
    const dy = toY - y;

    return (
      (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
      (Math.abs(dx) === 1 && Math.abs(dy) === 2)
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container">
        <Board knightPosition={knightPosition} moveKnight={moveKnight} />
      </div>
    </DndProvider>
  );
}

//Game
