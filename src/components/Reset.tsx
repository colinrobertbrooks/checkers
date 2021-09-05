interface IResetProps {
  reset: () => void;
}

const Reset = ({ reset }: IResetProps) => (
  <div className="row mt-4 mb-2 text-center">
    <div className="col-12">
      <button className="btn btn-sm" onClick={reset}>
        Reset
      </button>
    </div>
  </div>
);

export default Reset;
