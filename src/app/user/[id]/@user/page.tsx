import { getUserDetails } from "@/api/getUserDetails";
import Image from "next/image";

export type UserDetailsProps = {
  params: Promise<{ id: string }>;
};

const UserDetails: React.FC<UserDetailsProps> = async ({ params }) => {
  const pageParams = await params;
  const userDetails = await getUserDetails(pageParams.id);

  if (!userDetails) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-error/10 rounded-full mb-4">
          <span className="text-3xl">👤</span>
        </div>
        <h2 className="text-2xl font-bold text-base-content mb-2">
          User not found
        </h2>
        <p className="text-base-content/60">
          This user profile doesn't exist or has been removed.
        </p>
        <div className="mt-6">
          <button className="btn btn-primary">Go Back</button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Profile Header Card */}
      <div className="card bg-gradient-to-br from-primary/5 via-base-100 to-secondary/5 shadow-xl border border-base-200 mb-6">
        <div className="card-body p-8">
          {/* Avatar and Basic Info */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
            {/* Avatar */}
            <div className="avatar placeholder">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary text-primary-content rounded-full shadow-lg ring-4 ring-base-200">
                {userDetails.avatar ? (
                  <Image
                    src={userDetails.avatar}
                    alt={userDetails.username}
                    className="rounded-full"
                  />
                ) : (
                  <span className="text-3xl font-bold">
                    {(userDetails.displayName || userDetails.username)
                      .charAt(0)
                      .toUpperCase()}
                  </span>
                )}
              </div>
            </div>

            {/* User Info */}
            <div className="flex-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-3 mb-2">
                <h1 className="text-3xl font-bold text-base-content">
                  {userDetails.displayName || userDetails.username}
                </h1>
                {userDetails.verified && (
                  <div className="badge badge-primary gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Verified
                  </div>
                )}
              </div>

              <p className="text-base-content/60 text-lg mb-1">
                @{userDetails.username}
              </p>

              {userDetails.bio && (
                <p className="text-base-content leading-relaxed max-w-md">
                  {userDetails.bio}
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button className="btn btn-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                Follow
              </button>
              <button className="btn btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="stats stats-horizontal shadow-sm bg-base-200/50 rounded-xl">
            <div className="stat place-items-center">
              <div className="stat-title text-base-content/60">Posts</div>
              <div className="stat-value text-2xl text-primary">
                {userDetails._count.posts}
              </div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-title text-base-content/60">Followers</div>
              <div className="stat-value text-2xl text-secondary">
                {userDetails._count.followers}
              </div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-title text-base-content/60">Following</div>
              <div className="stat-value text-2xl text-accent">
                {userDetails._count.following}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info Card */}
      <div className="card bg-base-100 shadow-lg border border-base-200">
        <div className="card-body">
          <h2 className="card-title text-xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Profile Information
          </h2>

          <div className="grid gap-4">
            {/* Email */}
            <div className="flex items-center gap-3 p-3 bg-base-50 rounded-lg">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </div>
              <div>
                <p className="font-medium text-base-content">Email</p>
                <p className="text-sm text-base-content/70">
                  {userDetails.email}
                </p>
              </div>
            </div>

            {/* Join Date */}
            <div className="flex items-center gap-3 p-3 bg-base-50 rounded-lg">
              <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-medium text-base-content">Member since</p>
                <p className="text-sm text-base-content/70">
                  {new Date(userDetails.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>

            {/* Status */}
            <div className="flex items-center gap-3 p-3 bg-base-50 rounded-lg">
              <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-medium text-base-content">Account Status</p>
                <div className="flex items-center gap-2">
                  <div
                    className={`badge ${userDetails.verified ? "badge-success" : "badge-ghost"} badge-sm`}
                  >
                    {userDetails.verified ? "Verified" : "Unverified"}
                  </div>
                  <div className="badge badge-primary badge-sm">Active</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
