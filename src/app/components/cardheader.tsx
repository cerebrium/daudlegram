export type CardHeaderProps = {
  userId: string;
  createdAt: Date;
};

const CardHeader: React.FC<CardHeaderProps> = ({ userId, createdAt }) => {
  return (
    <div className="flex items-center gap-3">
      {/* Avatar */}
      <div className="avatar placeholder cursor-pointer">
        <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary text-primary-content rounded-full ring-2 ring-base-300 hover:ring-primary/30 transition-all duration-200">
          <span className="text-sm font-bold">
            {userId.substring(0, 2).toUpperCase()}
          </span>
        </div>
      </div>

      {/* User Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h3 className="font-bold text-base text-base-content hover:text-primary transition-colors cursor-pointer truncate">
            {userId}
          </h3>
          <div className="badge badge-ghost badge-xs">
            ID: {userId.substring(0, 6)}...
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-base-content/60">
          <span className="hover:text-base-content transition-colors cursor-pointer">
            @user_{userId.substring(0, 6)}
          </span>
          <span>•</span>
          <time
            className="hover:text-base-content transition-colors"
            title={createdAt.toLocaleString()}
          >
            {new Date(createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              ...(new Date().getFullYear() !== createdAt.getFullYear() && {
                year: "numeric",
              }),
            })}
          </time>
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
