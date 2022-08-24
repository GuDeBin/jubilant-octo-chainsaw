import { Square } from "./Square";
import { ItemTypes } from "../utils/ItemType";
import { Overlay } from "./Overlay";
import { useDrop } from "react-dnd";

export const BoardSquare = ({ x, y, children, game }) => {
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: ItemTypes.KNIGHT,
      canDrop: () => game.canMoveKnight(x, y),
      drop: () => game.moveKnight(x, y),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [game]
  );

  const black = (x + y) % 2 === 1;

  return (
    <div
      ref={drop}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <Square black={black}>{children}</Square>
      {isOver && !canDrop && <Overlay color={"red"} />}
      {!isOver && canDrop && <Overlay color={"yellow"} />}
      {isOver && canDrop && <Overlay color={"green"} />}
    </div>
  );
};
