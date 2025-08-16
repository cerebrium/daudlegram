export type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center">
      {children}
    </div>
  );
};

export default Layout;
