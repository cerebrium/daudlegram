export default function PostsLoading() {
  return (
    <div className="container mx-auto max-w-4xl px-4">
      {/* Loading Posts Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="h-8 w-48 bg-base-300 rounded animate-pulse"></div>
        <div className="h-10 w-10 bg-base-300 rounded-full animate-pulse"></div>
      </div>

      {/* Loading Posts */}
      <div className="space-y-6">
        {[...Array(5)].map((_, i) => (
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

      {/* Loading indicator */}
      <div className="text-center mt-8">
        <div className="flex flex-col items-center space-y-4">
          <span className="loading loading-spinner loading-lg text-primary"></span>
          <p className="text-base-content/60">Loading posts from people you follow...</p>
        </div>
      </div>
    </div>
  );
}