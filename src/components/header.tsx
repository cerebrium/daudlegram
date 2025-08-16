"use client";

import React from "react";
import { UserButton } from "@clerk/nextjs";
import ThemeToggle from "@/components/ThemeToggle";

const Header: React.FC = () => {
  return (
    <div className="navbar bg-base-200 shadow-lg">
      <div className="flex-1">
        <a
          className="btn btn-ghost text-xl font-bold text-primary"
          href="/dashboard"
        >
          daudlegram
        </a>
      </div>
      <div className="flex-none gap-2">
        <div className="flex align-middle">
          <ThemeToggle />
          <UserButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
