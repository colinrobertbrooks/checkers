import { INITIAL_PIECE_COUNT } from "../constants";

interface IScoreProps {
  black: number;
  red: number;
}

const Score = ({ black, red }: IScoreProps) => (
  <div className="row mb-4 text-center">
    <div className="col-6">
      <strong>Black:</strong> {INITIAL_PIECE_COUNT - black}
    </div>
    <div className="col-6">
      <strong>Red:</strong> {INITIAL_PIECE_COUNT - red}
    </div>
  </div>
);

export default Score;
