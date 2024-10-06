import { IPiece, Position } from "../types";
import { makeBlackPiece, makeRedPiece } from "../utils";

export const INITIAL_PIECE_COUNT_PER_TEAM = 12;

export const initialPieces: IPiece[] = [
  /*
   *  black pieces
   */
  makeBlackPiece({
    id: 1,
    position: Position.B8,
    isKing: false,
  }),
  makeBlackPiece({
    id: 2,
    position: Position.D8,
    isKing: false,
  }),
  makeBlackPiece({
    id: 3,
    position: Position.F8,
    isKing: false,
  }),
  makeBlackPiece({
    id: 4,
    position: Position.H8,
    isKing: false,
  }),
  makeBlackPiece({
    id: 5,
    position: Position.A7,
    isKing: false,
  }),
  makeBlackPiece({
    id: 6,
    position: Position.C7,
    isKing: false,
  }),
  makeBlackPiece({
    id: 7,
    position: Position.E7,
    isKing: false,
  }),
  makeBlackPiece({
    id: 8,
    position: Position.G7,
    isKing: false,
  }),
  makeBlackPiece({
    id: 9,
    position: Position.B6,
    isKing: false,
  }),
  makeBlackPiece({
    id: 10,
    position: Position.D6,
    isKing: false,
  }),
  makeBlackPiece({
    id: 11,
    position: Position.H6,
    isKing: false,
  }),
  makeBlackPiece({
    id: 12,
    position: Position.F6,
    isKing: false,
  }),
  /*
   *  red pieces
   */
  makeRedPiece({
    id: 13,
    position: Position.A3,
    isKing: false,
  }),
  makeRedPiece({
    id: 14,
    position: Position.C3,
    isKing: false,
  }),
  makeRedPiece({
    id: 15,
    position: Position.E3,
    isKing: false,
  }),
  makeRedPiece({
    id: 16,
    position: Position.G3,
    isKing: false,
  }),
  makeRedPiece({
    id: 17,
    position: Position.B2,
    isKing: false,
  }),
  makeRedPiece({
    id: 18,
    position: Position.D2,
    isKing: false,
  }),
  makeRedPiece({
    id: 19,
    position: Position.F2,
    isKing: false,
  }),
  makeRedPiece({
    id: 20,
    position: Position.H2,
    isKing: false,
  }),
  makeRedPiece({
    id: 21,
    position: Position.A1,
    isKing: false,
  }),
  makeRedPiece({
    id: 22,
    position: Position.C1,
    isKing: false,
  }),
  makeRedPiece({
    id: 23,
    position: Position.E1,
    isKing: false,
  }),
  makeRedPiece({
    id: 24,
    position: Position.G1,
    isKing: false,
  }),
];
