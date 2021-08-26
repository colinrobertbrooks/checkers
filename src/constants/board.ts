import { SquareFill } from "../types";

const EVEN_ROW = [
  SquareFill.Light,
  SquareFill.Dark,
  SquareFill.Light,
  SquareFill.Dark,
  SquareFill.Light,
  SquareFill.Dark,
  SquareFill.Light,
  SquareFill.Dark,
];

const ODD_ROW = [
  SquareFill.Dark,
  SquareFill.Light,
  SquareFill.Dark,
  SquareFill.Light,
  SquareFill.Dark,
  SquareFill.Light,
  SquareFill.Dark,
  SquareFill.Light,
];

export const board = [
  EVEN_ROW,
  ODD_ROW,
  EVEN_ROW,
  ODD_ROW,
  EVEN_ROW,
  ODD_ROW,
  EVEN_ROW,
  ODD_ROW,
];
