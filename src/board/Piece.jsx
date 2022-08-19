import { Knight } from "./Knight";

export const Piece = ({ isKnight }) => {
  return isKnight ? <Knight /> : null;
};
