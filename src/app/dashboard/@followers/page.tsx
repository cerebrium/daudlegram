import { getFollowers } from "@/api/getFollowers";
import FriendView from "@/app/components/friendView";

const FollowersView: React.FC = async () => {
  const followers = await getFollowers();

  if (!followers || !followers.length) {
    return (
      <div className="p-6">
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-base-200 rounded-full mb-4">
            <span className="text-2xl">👥</span>
          </div>
          <h3 className="font-bold text-lg text-base-content mb-2">
            No followers yet
          </h3>
          <p className="text-base-content/60 text-sm">
            Start connecting with people to build your network!
          </p>
          <div className="mt-4">
            <button className="btn btn-primary btn-sm">Find People</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="border-b border-base-200 pb-4">
        <h2 className="text-xl font-bold text-base-content mb-1">Following</h2>
        <p className="text-sm text-base-content/60">
          {followers.length} people you follow
        </p>
      </div>

      {/* Followers List */}
      <div className="space-y-3">
        {followers.map((friend) => {
          return <FriendView friend={friend} key={friend.id} />;
        })}
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-base-200">
        <button className="btn btn-ghost btn-sm w-full">
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
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          Find More People
        </button>
      </div>
    </div>
  );
};

export default FollowersView;
