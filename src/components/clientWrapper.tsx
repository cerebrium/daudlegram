"use client";

import { ThemeProvider } from "next-themes";
import Header from "./header";

export type ClientWrapperProps = {
  children: React.ReactNode;
};

const ClientWrapper: React.FC<ClientWrapperProps> = ({ children }) => {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
      <div className="h-screen bg-base-100">
        <Header />
        {children}
      </div>
    </ThemeProvider>
  );
};

export default ClientWrapper;
