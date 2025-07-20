"use client";

import { useEffect } from "react";

export default function ApplyPage() {
  useEffect(() => {
    window.location.href = "https://forms.gle/rFmoZNgcZ1fLFt2eA";
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-8 py-16">
      <div className="flex items-center space-x-4 opacity-0 animate-fade-in-up">
        <div className="w-16 h-16 flex items-center justify-center">
          <svg
            width="64"
            height="64"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-black"
          >
            <path
              d="M8 32L16 20L24 28L32 16L40 24"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h1 className="text-6xl text-black font-bold">hillclimbing</h1>
      </div>
      <p className="text-xl text-gray-600 font-normal leading-relaxed mt-8 opacity-0 animate-fade-in-up animate-delay-200">
        Redirecting to application form...
      </p>
    </div>
  );
}
