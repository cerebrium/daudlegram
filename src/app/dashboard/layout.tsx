import Header from "@/components/header";
import { ThemeProvider } from "next-themes";

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-base-100">
        <Header />
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Layout;
