"use client";

const Loading = () => {
  return (
    <div className="h-screen bg-base-100">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        {/* Loading Hero Section */}
        <div className="hero bg-gradient-to-r from-primary to-secondary rounded-box p-8 mb-8 animate-pulse">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <div className="h-12 bg-primary-content/20 rounded-lg mb-4"></div>
              <div className="h-6 bg-primary-content/20 rounded-lg mb-6"></div>
              <div className="h-12 w-32 bg-primary-content/20 rounded-lg mx-auto"></div>
            </div>
          </div>
        </div>

        {/* Loading Stats */}
        <div className="stats stats-vertical lg:stats-horizontal shadow-lg w-full mb-8 animate-pulse">
          <div className="stat">
            <div className="h-4 bg-base-300 rounded mb-2"></div>
            <div className="h-8 bg-base-300 rounded mb-2"></div>
            <div className="h-3 bg-base-300 rounded"></div>
          </div>
          <div className="stat">
            <div className="h-4 bg-base-300 rounded mb-2"></div>
            <div className="h-8 bg-base-300 rounded mb-2"></div>
            <div className="h-3 bg-base-300 rounded"></div>
          </div>
          <div className="stat">
            <div className="h-4 bg-base-300 rounded mb-2"></div>
            <div className="h-8 bg-base-300 rounded mb-2"></div>
            <div className="h-3 bg-base-300 rounded"></div>
          </div>
        </div>

        {/* Loading Posts */}
        <div className="space-y-6">
          <div className="flex items-center justify-between mb-6">
            <div className="h-8 w-48 bg-base-300 rounded animate-pulse"></div>
            <div className="h-10 w-10 bg-base-300 rounded-full animate-pulse"></div>
          </div>

          {[...Array(3)].map((_, i) => (
            <div key={i} className="card bg-base-100 shadow-xl animate-pulse">
              <div className="card-body">
                {/* Loading Post Header */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-base-300 rounded-full"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-base-300 rounded mb-2 w-32"></div>
                    <div className="h-3 bg-base-300 rounded w-24"></div>
                  </div>
                  <div className="w-8 h-8 bg-base-300 rounded-full"></div>
                </div>

                {/* Loading Post Content */}
                <div className="space-y-2 mb-4">
                  <div className="h-4 bg-base-300 rounded w-full"></div>
                  <div className="h-4 bg-base-300 rounded w-3/4"></div>
                  <div className="h-4 bg-base-300 rounded w-1/2"></div>
                </div>

                {/* Loading Post Actions */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <div className="h-8 w-16 bg-base-300 rounded"></div>
                    <div className="h-8 w-20 bg-base-300 rounded"></div>
                    <div className="h-8 w-16 bg-base-300 rounded"></div>
                  </div>
                  <div className="flex space-x-4">
                    <div className="h-4 w-16 bg-base-300 rounded"></div>
                    <div className="h-4 w-20 bg-base-300 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Loading indicator with spinner */}
        <div className="text-center mt-8">
          <div className="flex flex-col items-center space-y-4">
            <span className="loading loading-spinner loading-lg text-primary"></span>
            <p className="text-base-content/60">
              Loading your personalized feed...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
