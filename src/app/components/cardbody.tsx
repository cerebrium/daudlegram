import CardActions from "./cardActions";
import CardHeader from "./cardheader";
import CardHeaderThreeDots from "./headerThreeDots";
import CommentToggleButton from "./commentToggleButton";
import PostComments from "./postComments";
import { Suspense } from "react";
import Image from "next/image";

export type CardBodyProps = {
  post: {
    user: {
      displayName: string | null;
      username: string;
    };
    _count: {
      likes: number;
      comments: number;
    };
  } & {
    userId: string;
    createdAt: Date;
    id: string;
    updatedAt: Date;
    content: string;
    imageUrl: string | null;
  };
  showComments: string;
};

const CardBody: React.FC<CardBodyProps> = ({ post, showComments }) => {
  const isCommentsOpen = showComments === post.id;

  return (
    <div className="card-body p-0">
      {/* Post Header */}
      <div className="flex items-center justify-between p-6 pb-4">
        <CardHeader
          userId={post.user.displayName || post.user.username}
          createdAt={post.createdAt}
        />
        <CardHeaderThreeDots />
      </div>

      {/* Post Content */}
      <div className="px-6 pb-4">
        <div className="text-base-content leading-relaxed">
          <p className="text-base whitespace-pre-wrap break-words">
            {post.content}
          </p>
        </div>

        {/* Post Image */}
        {post.imageUrl && (
          <div className="mt-4 rounded-2xl overflow-hidden bg-base-200">
            <Image
              src={post.imageUrl}
              alt="Post content"
              className="w-full h-auto max-h-96 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
      </div>

      {/* Engagement Metrics */}
      <div className="px-6 pb-3">
        <div className="flex items-center gap-4 text-sm text-base-content/60">
          <span className="hover:text-base-content transition-colors">
            {post._count.likes > 0 &&
              `${post._count.likes} ${post._count.likes === 1 ? "like" : "likes"}`}
          </span>
          <span className="hover:text-base-content transition-colors">
            {post._count.comments > 0 &&
              `${post._count.comments} ${post._count.comments === 1 ? "comment" : "comments"}`}
          </span>
        </div>
      </div>

      {/* Action Bar */}
      <div className="border-t border-base-200 px-6 py-3">
        <div className="flex items-center justify-between">
          <CardActions postId={post.id} />
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-error/10 transition-colors group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-base-content/60 group-hover:text-error transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span className="text-sm font-medium text-base-content/80 group-hover:text-error transition-colors">
                {post._count.likes}
              </span>
            </button>

            <CommentToggleButton
              postId={post.id}
              commentCount={post._count.comments}
              isOpen={isCommentsOpen}
            />

            <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-base-content/60 group-hover:text-primary transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                />
              </svg>
              <span className="text-sm font-medium text-base-content/80 group-hover:text-primary transition-colors sr-only sm:not-sr-only">
                Share
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Inline Comments */}
      {isCommentsOpen && (
        <div className="border-t border-base-200">
          <Suspense
            fallback={
              <div className="flex flex-col items-center justify-center py-12 space-y-4">
                <div className="loading loading-spinner loading-lg text-primary"></div>
                <div className="flex flex-col items-center space-y-1">
                  <span className="text-base font-medium text-base-content/70">
                    Loading comments...
                  </span>
                  <span className="text-sm text-base-content/50">
                    Fetching the latest discussions
                  </span>
                </div>
              </div>
            }
          >
            <PostComments id={post.id} />
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default CardBody;
