import { Position } from "./position";

export enum SquareFill {
  Dark,
  Light,
}

export interface ISquare {
  fill: SquareFill;
  position: Position;
}
