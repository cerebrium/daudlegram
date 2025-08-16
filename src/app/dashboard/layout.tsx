import { syncUser } from "@/api/syncUser";
import ClientWrapper from "@/components/clientWrapper";

export type LayoutProps = {
  children: React.ReactNode;
  posts: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = async ({ children, posts }) => {
  await syncUser();

  return (
    <ClientWrapper>
      {posts}
      {children}
    </ClientWrapper>
  );
};

export default Layout;
