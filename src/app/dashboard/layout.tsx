import { syncUser } from "@/api/syncUser";
import ClientWrapper from "@/components/clientWrapper";

export type LayoutProps = {
  children: React.ReactNode;
  posts: React.ReactNode;
  followers: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = async ({
  children,
  posts,
  followers,
}) => {
  await syncUser();

  return (
    <ClientWrapper>
      <div className="flex gap-6 h-screen overflow-hidden">
        {/* Left Sidebar - Followers */}
        <div className="w-80 flex-shrink-0 h-full overflow-y-auto border-r border-base-200 bg-base-50">
          {followers}
        </div>

        {/* Main Content - Posts */}
        <div className="flex-1 h-full overflow-y-auto">
          <div className="max-w-2xl mx-auto">
            {posts}

            {/* Load More Button */}
            <div className="text-center mt-8 pb-8">
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
                Load More Posts
              </button>
            </div>
          </div>
        </div>
      </div>

      {children}
    </ClientWrapper>
  );
};

export default Layout;
