import React from "react";
import { ItemTypes } from "../Constants";
import { useDrag } from "react-dnd";

function Knight() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.KNIGHT,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <span
      ref={drag}
      style={{
        fontSize: "45px",
        fontWeight: "bold",
        cursor: "move",
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      ♘
    </span>
  );
}

export default Knight;
