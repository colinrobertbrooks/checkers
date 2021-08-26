import { useRef } from "react";
import styled from "styled-components";
import { useRect } from "../hooks";
import { ISquare, SquareFill } from "../types";

interface ISquareProps extends Pick<ISquare, "fill"> {}

const Square: React.FC<ISquareProps> = ({ fill, children }) => {
  const wrapperRef = useRef(null);
  const { width: minHeight } = useRect(wrapperRef);
  const backgroundColor = fill === SquareFill.Dark ? "cornsilk" : "light";

  return (
    <Wrapper ref={wrapperRef} style={{ minHeight, backgroundColor }}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 1px;
  margin-right: 1px;
  outline: 1px solid lightgray;
  position: relative;
  width: 12.5%;
`;

export default Square;
