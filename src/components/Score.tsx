import { INITIAL_PIECE_COUNT_PER_TEAM } from "../consts";

interface IScoreProps {
  countBlack: number;
  countRed: number;
}

const Score = ({ countBlack, countRed }: IScoreProps) => (
  <div className="row mb-3 text-center">
    <div className="col-6">
      <strong>Black:</strong> {INITIAL_PIECE_COUNT_PER_TEAM - countRed}
    </div>
    <div className="col-6">
      <strong>Red:</strong> {INITIAL_PIECE_COUNT_PER_TEAM - countBlack}
    </div>
  </div>
);

export default Score;
