"use client";
import * as React from "react";
import Link from "next/link";

const Start: React.FC = () => {
  return (
    <main className="h-screen flex flex-col md:flex-row lg:flex-row items-center w-full bg-indigo-950 relative">
      <Link href="/public-service-dashboard">
        <button className="bg-white px-4 py-2 rounded text-indigo-950 font-semibold">
          Start
        </button>
      </Link>
    </main>
  );
};

export default Start;
