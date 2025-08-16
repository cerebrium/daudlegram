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
      <div className="h-10/12 overflow-scroll">{posts}</div>
      {/* Load More Button */}
      <div className="text-center mt-8">
        <button className="btn btn-outline btn-wide">
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
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>

      {children}
    </ClientWrapper>
  );
};

export default Layout;
