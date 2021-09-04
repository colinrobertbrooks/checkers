import { Position } from "./position";

export enum PieceFill {
  Black,
  Red,
}

export interface IPiece {
  id: number;
  fill: PieceFill;
  position: Position | null;
  isKing: boolean;
}

export enum PieceRelationship {
  Teammate,
  Opponent,
}
