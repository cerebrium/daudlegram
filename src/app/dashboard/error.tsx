"use client";

const ErrorComponent = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center">
      <div className="container mx-auto max-w-md px-4">
        <div className="card bg-base-100 shadow-2xl">
          <div className="card-body text-center">
            {/* Error Icon */}
            <div className="text-6xl mb-4">⚠️</div>

            {/* Error Title */}
            <h2 className="card-title justify-center text-2xl text-error mb-2">
              Oops! Something went wrong
            </h2>

            {/* Error Message */}
            <p className="text-base-content/70 mb-4">
              We encountered an unexpected error while loading your dashboard.
              Don't worry, this is temporary!
            </p>

            {/* Error Details (for development) */}
            {process.env.NODE_ENV === "development" && (
              <div className="collapse collapse-arrow bg-base-200 mb-4">
                <input type="checkbox" />
                <div className="collapse-title text-sm font-medium">
                  View Error Details
                </div>
                <div className="collapse-content text-xs text-left">
                  <pre className="whitespace-pre-wrap break-words">
                    {error.message}
                  </pre>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="card-actions justify-center space-x-2">
              <button onClick={reset} className="btn btn-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                Try Again
              </button>

              <button
                onClick={() => (window.location.href = "/")}
                className="btn btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Go Home
              </button>
            </div>

            {/* Help Text */}
            <div className="text-xs text-base-content/50 mt-4">
              If this problem persists, please contact support
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorComponent;

