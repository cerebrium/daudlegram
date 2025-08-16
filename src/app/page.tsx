import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import AnimatedPattern from "./components/animated-pattern";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-200 transition-colors duration-300">
      {/* Animated background pattern */}
      <AnimatedPattern />

      {/* Hero section */}
      <div className="hero min-h-screen">
        <div className="hero-content text-center relative z-10">
          <div className="max-w-md">
            {/* Main branding */}
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              daudlegram
            </h1>
            <p className="text-lg md:text-xl text-base-content/80 mb-8 font-medium">
              Your Social Experience
            </p>

            {/* Authentication buttons */}
            <div className="flex flex-col gap-4 items-center">
              <SignedOut>
                <SignInButton>
                  <button className="btn btn-primary btn-lg text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <div className="flex flex-col items-center gap-4">
                  <p className="text-base-content/70">Welcome back!</p>
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: "w-12 h-12",
                      },
                    }}
                  />
                </div>
              </SignedIn>
            </div>
          </div>
        </div>
      </div>

      {/* Simple footer */}
      <footer className="footer footer-center p-6 bg-base-200 text-base-content/60 relative z-10">
        <div>
          <p>© 2025 daudlegram - Connect, Share, Discover</p>
        </div>
      </footer>
    </div>
  );
}
