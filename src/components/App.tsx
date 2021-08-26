import { useState } from "react";
import { board, initialPieces } from "../constants";
import { Position, IPiece } from "../types";
import { BoardContainer, BoardRow } from "./board";
import Square from "./Square";
import Piece from "./Piece";

const App = () => {
  const [pieces] = useState<IPiece[]>(initialPieces);

  const getPiece = (position: Position): IPiece | undefined =>
    pieces.find((piece) => piece.position === position);

  return (
    <div className="container">
      <h1 className="my-4 text-center">Checkers</h1>
      <BoardContainer>
        {board.map((row, rowIdx) => (
          <BoardRow key={rowIdx}>
            {row.map(({ position, ...square }) => {
              const piece = getPiece(position);
              return (
                <Square key={position} fill={square.fill}>
                  {piece && <Piece fill={piece.fill} />}
                </Square>
              );
            })}
          </BoardRow>
        ))}
      </BoardContainer>
    </div>
  );
};

export default App;
