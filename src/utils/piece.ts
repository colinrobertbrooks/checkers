import { IPiece, PieceFill } from "../types";

interface IPieceWithoutFill extends Omit<IPiece, "fill"> {}

export const makeRedPiece = (attributes: IPieceWithoutFill): IPiece => ({
  fill: PieceFill.Red,
  ...attributes,
});

export const makeBlackPiece = (attributes: IPieceWithoutFill): IPiece => ({
  fill: PieceFill.Black,
  ...attributes,
});
