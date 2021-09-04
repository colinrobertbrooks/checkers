import { IPiece, PieceFill, Position } from "../types";

const encodeX = (x: number): string => "abcdefgh".split("")[x];

const decodeX = (position: Position): number =>
  "abcdefgh".split("").indexOf(position.split("")[0]);

const decodeY = (position: Position): number => Number(position.split("")[1]);

const getCoordinates = (fromPosition: Position, toPosition: Position) => ({
  from: {
    x: decodeX(fromPosition),
    y: decodeY(fromPosition),
  },
  to: {
    x: decodeX(toPosition),
    y: decodeY(toPosition),
  },
});

const getIsDescending = (from: number, to: number) => from > to;

export const validateMove = (
  fromPosition: Position,
  toPosition: Position,
  movedPiece: IPiece
): boolean => {
  const { from, to } = getCoordinates(fromPosition, toPosition);
  const pieceFillIsBlack = movedPiece.fill === PieceFill.Black;

  // can't move more than two positions
  if (Math.abs(from.y - to.y) > 2) return false;

  // must move diagonally
  const isDiagonal = Math.abs(from.x - to.x) === Math.abs(from.y - to.y);
  if (!isDiagonal) return false;

  // evaluate king movement (can descend or ascend regardless of fill)
  if (movedPiece.isKing) return true;

  // evaluate non-king movement (black descend / red ascend)
  const yIsDescending = getIsDescending(from.y, to.y);
  return pieceFillIsBlack ? yIsDescending : !yIsDescending;
};

export const getJumpedPosition = (
  fromPosition: Position,
  toPosition: Position
): Position | null => {
  const { from, to } = getCoordinates(fromPosition, toPosition);

  if (Math.abs(from.y - to.y) !== 2) return null;

  const x = encodeX((from.x + to.x) / 2);
  const y = (from.y + to.y) / 2;
  return `${x}${y}` as Position;
};

export const getIsKing = (
  toPosition: Position,
  movedPiece: IPiece
): boolean => {
  const toY = decodeY(toPosition);
  if (movedPiece.fill === PieceFill.Black) return toY === 1;
  return toY === 8;
};
