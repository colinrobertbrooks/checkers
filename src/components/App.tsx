import { useState } from "react";
import {
  DropResult,
  DragDropContext,
  Droppable,
  Draggable,
} from "react-beautiful-dnd";
import { board, initialPieces } from "../constants";
import { Position, IPiece, PieceFill } from "../types";
import {
  validateMove,
  getJumpedPosition,
  checkIfPiecesAreOpponents,
  getIsKing,
} from "../utils";
import { BoardContainer, BoardRow } from "./board";
import Square from "./Square";
import Piece from "./Piece";
import Score from "./Score";

const App = () => {
  /*
   *  pieces
   */
  const [pieces, setPieces] = useState<IPiece[]>(initialPieces);

  const getPiece = (position: Position): IPiece | undefined =>
    pieces.find((piece) => piece.position === position);

  const updatePiece = (id: number, updates: Partial<Omit<IPiece, "id">>) =>
    setPieces((currentPieces) => {
      const currentPiece = currentPieces.find((p) => p.id === id)!;
      return [
        ...currentPieces.filter((p) => p.id !== id),
        {
          ...currentPiece,
          ...updates,
        },
      ];
    });

  /*
   *  moves
   */
  const handleMove = (result: DropResult) => {
    if (!result.destination) return;

    const fromPosition = result.source.droppableId as Position;
    const toPosition = result.destination.droppableId as Position;
    const movedPiece = getPiece(fromPosition)!;

    /*
     *  validate move
     */
    const moveIsValid = validateMove(fromPosition, toPosition, movedPiece);
    if (!moveIsValid) return;

    /*
     *  prevent collisions
     */
    const collisionPiece = getPiece(toPosition);
    if (collisionPiece) return;

    /*
     *  handle jump
     */
    const jumpedPosition = getJumpedPosition(fromPosition, toPosition);
    const jumpedPiece = jumpedPosition && getPiece(jumpedPosition);
    const jumpedPieceIsAnOpponent = checkIfPiecesAreOpponents(
      movedPiece,
      jumpedPiece
    );

    // can't jump an empty position
    if (jumpedPosition && !jumpedPiece) return null;

    // can't jump a teammate piece
    if (jumpedPiece && !jumpedPieceIsAnOpponent) return null;

    /*
     *  update game
     */
    // update moved piece
    updatePiece(movedPiece.id, {
      position: toPosition,
      isKing: movedPiece.isKing || getIsKing(toPosition, movedPiece),
    });

    // if jumped, then remove opponent piece
    if (jumpedPiece && jumpedPieceIsAnOpponent) {
      updatePiece(jumpedPiece.id, { position: null });
    }
  };

  return (
    <div className="container">
      <h1 className="mt-4 mb-4 text-center">Checkers</h1>
      <Score
        countBlack={
          pieces.filter(
            (p) => p.fill === PieceFill.Black && p.position !== null
          ).length
        }
        countRed={
          pieces.filter((p) => p.fill === PieceFill.Red && p.position !== null)
            .length
        }
      />
      <DragDropContext onDragEnd={handleMove}>
        <BoardContainer>
          {board.map((row, rowIdx) => (
            <BoardRow key={rowIdx}>
              {row.map(({ position, ...square }) => {
                const piece = getPiece(position);
                return (
                  <Square key={position} fill={square.fill}>
                    <Droppable droppableId={position}>
                      {({
                        innerRef: droppableInnerRef,
                        droppableProps,
                        placeholder: droppablePlaceholder,
                      }) => (
                        <div ref={droppableInnerRef} {...droppableProps}>
                          {piece && (
                            <Draggable
                              key={piece.id}
                              draggableId={String(piece.id)}
                              index={0}
                            >
                              {({
                                innerRef: draggableInnerRef,
                                draggableProps,
                                dragHandleProps,
                              }) => (
                                <div
                                  ref={draggableInnerRef}
                                  {...draggableProps}
                                  {...dragHandleProps}
                                >
                                  <Piece
                                    fill={piece.fill}
                                    isKing={piece.isKing}
                                  />
                                </div>
                              )}
                            </Draggable>
                          )}
                          {droppablePlaceholder}
                        </div>
                      )}
                    </Droppable>
                  </Square>
                );
              })}
            </BoardRow>
          ))}
        </BoardContainer>
      </DragDropContext>
    </div>
  );
};

export default App;
