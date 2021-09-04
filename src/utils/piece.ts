import { IPiece, PieceFill, PieceRelationship } from "../types";

interface IPieceWithoutFill extends Omit<IPiece, "fill"> {}

export const makeRedPiece = (attributes: IPieceWithoutFill): IPiece => ({
  fill: PieceFill.Red,
  ...attributes,
});

export const makeBlackPiece = (attributes: IPieceWithoutFill): IPiece => ({
  fill: PieceFill.Black,
  ...attributes,
});

const determinePieceRelationship = (
  self: IPiece,
  other: IPiece | null | undefined
): PieceRelationship | null => {
  if (!other) return null;
  const isTeammate = self.fill === other.fill;
  return isTeammate ? PieceRelationship.Teammate : PieceRelationship.Opponent;
};

export const checkIfPiecesAreOpponents = (
  self: IPiece,
  other: IPiece | null | undefined
): boolean => {
  const relationship = determinePieceRelationship(self, other);
  return relationship === PieceRelationship.Opponent;
};
