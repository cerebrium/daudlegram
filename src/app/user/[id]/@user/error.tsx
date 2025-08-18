"use client";

export type ErrorViewProps = {
  reset: () => void;
  error: Error;
};

const ErrorView: React.FC<ErrorViewProps> = ({ error, reset }) => {
  return (
    <div>
      <p>{error.message}</p>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default ErrorView;
