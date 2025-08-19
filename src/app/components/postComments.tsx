import { getPostComments } from "@/api/getPostComments";
import CommentWrapper from "../clientComponents/commentWrapper";

export type PageProps = {
  id: string;
};

const PostComments: React.FC<PageProps> = async ({ id }) => {
  const comments = await getPostComments(id);

  if (!comments || !comments.length) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-base-200 rounded-full mb-4">
          <span className="text-2xl">💭</span>
        </div>
        <h4 className="font-bold text-lg text-base-content mb-2">
          No comments yet
        </h4>
        <p className="text-base-content/60 max-w-sm mx-auto">
          Be the first to share your thoughts on this post!
        </p>
        <div className="mt-4">
          <CommentWrapper postId={id} />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 pb-2 border-b border-base-300">
        <h4 className="font-bold text-lg text-base-content">Comments</h4>
        <div className="badge badge-ghost badge-sm">{comments.length}</div>
      </div>
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="flex gap-4 group hover:bg-base-50 p-3 rounded-xl transition-colors duration-200"
        >
          <div className="avatar placeholder flex-shrink-0">
            <div className="bg-gradient-to-br from-primary to-secondary text-primary-content rounded-full w-12 h-12 shadow-lg ring-2 ring-base-300">
              <span className="text-sm font-bold">
                {(comment.user.displayName || comment.user.username)
                  .charAt(0)
                  .toUpperCase()}
              </span>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="bg-base-100 rounded-2xl p-4 shadow-sm border border-base-200 group-hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-base text-base-content">
                    {comment.user.displayName || comment.user.username}
                  </span>
                  {comment.user.verified && (
                    <div className="badge badge-primary badge-xs">✓</div>
                  )}
                </div>
                <time className="text-xs text-base-content/50 font-medium">
                  {new Date(comment.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </time>
              </div>
              <p className="text-base text-base-content leading-relaxed break-words">
                {comment.content}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostComments;
