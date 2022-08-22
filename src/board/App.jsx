import { useMemo } from "react";
import { Board } from "./Board";
import { Game } from "./utils/Game";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

const containerStyle = {
  width: 500,
  height: 500,
  border: "1px solid gray",
};

export const App = () => {
  const game = useMemo(() => new Game(), []);
  return (
    <div style={containerStyle}>
      <DndProvider backend={HTML5Backend}>
        <Board game={game} />
      </DndProvider>
    </div>
  );
};
