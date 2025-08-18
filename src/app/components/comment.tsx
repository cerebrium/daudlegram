export type CommentProps = {
  comment: {
    user: {
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
  } & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    content: string;
    userId: string;
    postId: string;
  };
};

const Comment: React.FC<CommentProps> = ({ comment }) => {
  return (
    <div>
      from: {comment.user.displayName || comment.user.username}
      at: {comment.createdAt.toLocaleDateString()}
      content: {comment.content}
    </div>
  );
};

export default Comment;
