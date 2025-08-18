import Comment from "./comment";
import { getPostComments } from "@/api/getPostComments";

export type ClientPostCommentsProps = {
  id: string;
};

export type CommensType = {
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
}[];

const ClientPostComments: React.FC<ClientPostCommentsProps> = async ({
  id,
}) => {
  const comments = await getPostComments(id);

  return (
    <div>
      {comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </div>
  );
};

export default ClientPostComments;
