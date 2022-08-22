import { Board } from "./components/Board";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

export const App = () => {
  return (
    <div style={{ width: 500, height: 500, border: "1px solid gray" }}>
      <DndProvider backend={HTML5Backend}>
        <Board></Board>
      </DndProvider>
    </div>
  );
};
