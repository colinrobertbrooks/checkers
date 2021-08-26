import { Position, SquareFill } from "../types";

export const makeDarkSquare = (position: Position) => ({
  fill: SquareFill.Dark,
  position,
});

export const makeLightSquare = (position: Position) => ({
  fill: SquareFill.Light,
  position,
});
