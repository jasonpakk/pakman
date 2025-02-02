"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to Pak-Man</h1>
      <button
        onClick={() => router.push("/pacman")}
        className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg"
      >
        Play
      </button>
    </div>
  );
}
