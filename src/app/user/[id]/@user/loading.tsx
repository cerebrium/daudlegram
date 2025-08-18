"use client";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6">
      <div className="flex flex-col items-center space-y-4">
        <div className="loading loading-spinner loading-lg text-primary"></div>
        <div className="text-center space-y-1">
          <p className="text-sm font-medium text-base-content/70">
            Loading profile...
          </p>
          <p className="text-xs text-base-content/50">
            This will just take a moment
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
