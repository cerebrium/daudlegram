export type UserViewProps = {
  params: { id: string };
};

const UserView: React.FC<UserViewProps> = ({ params }) => {
  console.log("user view: ", params);
  return <div>User view</div>;
};

export default UserView;
