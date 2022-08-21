import { Square } from "./Square";

export const BoardSquare = ({ x, y, children }) => {
  const black = (x + y) % 2 === 1;
  return <Square black={black}>{children}</Square>;
};
