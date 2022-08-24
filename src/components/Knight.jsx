import { ItemTypes } from "../utils/ItemType";
import { knightImage } from "../board/utils/knightImage";
import { DragPreviewImage, useDrag } from "react-dnd";

export const Knight = () => {
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: ItemTypes.KNIGHT,
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    []
  );
  return (
    <>
      <DragPreviewImage connect={preview} src={knightImage} />
      <div
        ref={drag}
        style={{
          fontSize: 40,
          fontWeight: "bold",
          cursor: "move",
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        ♘
      </div>
    </>
  );
};
