export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-primary mb-4">Dashboard</h1>
            <p className="text-lg text-base-content/70 mb-6">
              Welcome to your protected dashboard! This page is only accessible
              to authenticated users.
            </p>
            <div className="alert alert-success">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                Authentication successful! Theme toggle is working correctly.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
