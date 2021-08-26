import { useRef } from "react";
import styled from "styled-components";
import { useRect } from "../hooks";

import { SquareFill } from "../types";

/*
 *  board
 */
export const Board = styled.div`
  margin: 0 auto;
  max-height: 80vh;
  max-width: 80vh;
`;

/*
 *  row
 */
export const Row = styled.div`
  align-items: stretch;
  display: flex;
  width: 100%;
`;

/*
 *  square
 */
const SquareOuter = styled.div`
  margin-top: 1px;
  margin-right: 1px;
  outline: 1px solid lightgray;
  position: relative;
  width: 12.5%;
`;

interface ISquareProps {
  fill: SquareFill;
}

export const Square: React.FC<ISquareProps> = ({ fill, children }) => {
  const outerRef = useRef(null);
  const { width: minHeight } = useRect(outerRef);
  const backgroundColor = fill === SquareFill.Dark ? "cornsilk" : "light";

  return (
    <SquareOuter ref={outerRef} style={{ minHeight, backgroundColor }}>
      {children}
    </SquareOuter>
  );
};
