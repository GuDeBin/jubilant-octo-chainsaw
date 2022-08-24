import { Board } from "./components/Board";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { Game } from "./utils/Game";
import { useMemo } from "react";

export const App = () => {
  const game = useMemo(() => new Game(), []);
  return (
    <div style={{ width: 500, height: 500, border: "1px solid gray" }}>
      <DndProvider backend={HTML5Backend}>
        <Board game={game}></Board>
      </DndProvider>
    </div>
  );
};
