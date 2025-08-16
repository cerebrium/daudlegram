import { getFollowedPosts } from "@/api/getPosts";

const FollowerPosts: React.FC = async () => {
  const posts = await getFollowedPosts();

  if (!posts || !posts.length) {
    return <div>No followers posts</div>;
  }

  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            constent: {post.content} <br />
            poster: {post.userId}
          </div>
        );
      })}
    </div>
  );
};

export default FollowerPosts;
