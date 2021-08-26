import blackSrc from "../images/piece/black.png";
import redSrc from "../images/piece/red.png";
import { IPiece, PieceFill } from "../types";

interface IPieceProps extends Pick<IPiece, "fill"> {}

const Piece = ({ fill }: IPieceProps) => (
  <div className="p-1">
    <img
      className="img-fluid"
      src={fill === PieceFill.Black ? blackSrc : redSrc}
      alt="Piece"
    />
  </div>
);

export default Piece;
