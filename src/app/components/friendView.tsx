import Link from "next/link";

export type FriendViewProps = {
  friend: {
    id: string;
    clerkId: string;
    email: string;
    username: string;
    displayName: string | null;
    bio: string | null;
    avatar: string | null;
    verified: boolean;
    createdAt: Date;
    updatedAt: Date;
  };
};

const FriendView: React.FC<FriendViewProps> = ({ friend }) => {
  return (
    <Link
      href={`/user/${friend.id}`}
      className="flex items-center gap-3 p-3 rounded-xl hover:bg-base-100 transition-colors duration-200 group cursor-pointer"
    >
      {/* Avatar */}
      <div className="avatar placeholder flex-shrink-0">
        <div className="bg-gradient-to-br from-primary to-secondary text-primary-content rounded-full w-12 h-12 shadow-md ring-2 ring-base-200 group-hover:ring-primary/20 transition-all duration-200">
          <span className="text-sm font-bold">
            {(friend.displayName || friend.username).charAt(0).toUpperCase()}
          </span>
        </div>
      </div>

      {/* User Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h4 className="font-semibold text-base text-base-content truncate">
            {friend.displayName || friend.username}
          </h4>
          {friend.verified && (
            <div className="badge badge-primary badge-xs flex-shrink-0">✓</div>
          )}
        </div>
        <p className="text-sm text-base-content/60 truncate">
          @{friend.username}
        </p>
        {friend.bio && (
          <p className="text-xs text-base-content/50 truncate mt-1">
            {friend.bio}
          </p>
        )}
      </div>

      {/* Action Button */}
      <div className="flex-shrink-0">
        <button className="btn btn-ghost btn-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
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
    </Link>
  );
};

export default FriendView;
