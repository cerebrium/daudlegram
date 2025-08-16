"use client";

export default function AnimatedPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 800 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--p))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--s))" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--a))" stopOpacity="0.7" />
            <stop offset="100%" stopColor="hsl(var(--p))" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {/* Floating circles with different animations */}
        <circle
          cx="150"
          cy="150"
          r="40"
          fill="url(#grad1)"
          className="animate-[float_6s_ease-in-out_infinite]"
        />
        <circle
          cx="650"
          cy="200"
          r="60"
          fill="url(#grad2)"
          className="animate-[float_8s_ease-in-out_infinite_reverse]"
        />
        <circle
          cx="300"
          cy="450"
          r="35"
          fill="url(#grad1)"
          className="animate-[float_7s_ease-in-out_infinite_1s]"
        />
        <circle
          cx="500"
          cy="100"
          r="25"
          fill="url(#grad2)"
          className="animate-[float_5s_ease-in-out_infinite_2s]"
        />
        <circle
          cx="700"
          cy="450"
          r="45"
          fill="url(#grad1)"
          className="animate-[float_9s_ease-in-out_infinite_3s]"
        />
        <circle
          cx="100"
          cy="350"
          r="30"
          fill="url(#grad2)"
          className="animate-[float_6.5s_ease-in-out_infinite_1.5s]"
        />

        {/* Floating hexagons */}
        <polygon
          points="400,80 430,95 430,125 400,140 370,125 370,95"
          fill="url(#grad1)"
          className="animate-[spin_20s_linear_infinite]"
        />
        <polygon
          points="200,300 240,320 240,360 200,380 160,360 160,320"
          fill="url(#grad2)"
          className="animate-[spin_15s_linear_infinite_reverse]"
        />
      </svg>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
}
