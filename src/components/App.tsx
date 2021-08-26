import { board } from "../constants";
import { encodePosition } from "../utils";
import { Board, Row, Square } from "./board";

const App = () => {
  return (
    <div className="container">
      <h1 className="my-4 text-center">Checkers</h1>
      <Board>
        {board.map((row, rowIdx) => (
          <Row key={rowIdx}>
            {row.map((fill, squareIdx) => {
              const position = encodePosition(rowIdx, squareIdx);
              return (
                <Square key={position} fill={fill}>
                  {/* TODO */}
                </Square>
              );
            })}
          </Row>
        ))}
      </Board>
    </div>
  );
};

export default App;
