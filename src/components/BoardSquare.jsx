import { Square } from "./Square";
import { ItemTypes } from "../board/utils/ItemTypes";
import { Overlay } from "./Overlay";
import { useDrop } from "react-dnd";

export const BoardSquare = ({ x, y, children, moveKnight, canMoveKnight }) => {
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: ItemTypes.KNIGHT,
      canDrop: () => canMoveKnight(x, y),
      drop: () => moveKnight(x, y),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    []
  );

  const black = (x + y) % 2 === 1;

  return (
    <div
      ref={drop}
      //role="Space"
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <Square black={black}>{children}</Square>
      {isOver && !canDrop && <Overlay color={"red"} />}
      {!isOver && canDrop && <Overlay color={"green"} />}
      {isOver && canDrop && <Overlay color={"yellow"} />}
    </div>
  );
};
