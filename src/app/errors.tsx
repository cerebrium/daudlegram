"use client";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

const RsvpError: React.FC<ErrorProps> = ({ error, reset }) => {
  return (
    <div>
      <h2>{error.message}</h2>
      <button onClick={() => reset()}></button>
    </div>
  );
};

export default RsvpError;
