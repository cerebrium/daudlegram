"use client";

export type ErrorComponentProps = {
  error: Error;
  reset: () => void;
};

const ErrorComponent: React.FC<ErrorComponentProps> = ({ error, reset }) => {
  return <div>{error.message}</div>;
};

export default ErrorComponent;
