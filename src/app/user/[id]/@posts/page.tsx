import { getUserPosts } from "@/api/getUserPosts";
import CardBody from "@/app/components/cardbody";

export type UserPostsProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ showComments?: string }>;
};

const UserPosts: React.FC<UserPostsProps> = async ({
  params,
  searchParams,
}) => {
  const userParams = await params;

  const posts = await getUserPosts(userParams.id);
  const sParams = await searchParams;

  if (!posts || !posts.length) {
    return (
      <div className="container mx-auto max-w-4xl px-4">
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body text-center">
            <div className="text-6xl mb-4">📭</div>
            <h2 className="card-title justify-center text-2xl">No Posts Yet</h2>
            <p className="text-base-content/70">
              Start following people to see their amazing posts here!
            </p>
            <div className="card-actions justify-center mt-4">
              <button className="btn btn-primary">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Discover People
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-4xl p-6">
      {/* Posts Grid */}
      <div className="space-y-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <CardBody post={post} showComments={sParams.showComments} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPosts;
