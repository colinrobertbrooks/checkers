import blackKingSrc from "../images/piece/black-king.png";
import blackSrc from "../images/piece/black.png";
import redKingSrc from "../images/piece/red-king.png";
import redSrc from "../images/piece/red.png";
import { IPiece, PieceFill } from "../types";

interface IPieceProps extends Pick<IPiece, "fill" | "isKing"> {}

const getSrc = ({ fill, isKing }: IPieceProps): string => {
  if (fill === PieceFill.Black) {
    if (isKing) return blackKingSrc;
    return blackSrc;
  } else {
    if (isKing) return redKingSrc;
    return redSrc;
  }
};

const Piece = (props: IPieceProps) => (
  <div className="p-1">
    <img className="img-fluid" src={getSrc(props)} alt="Piece" />
  </div>
);

export default Piece;
