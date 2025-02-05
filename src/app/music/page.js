"use client";
import { useRouter } from "next/navigation";

export default function Music() {
  const router = useRouter();

  return (
    <div className="page">
      <div className="pageHeader">
        <div className="title">
          <img src="/pacman/blue.png" alt="blue" />
          <h1>Music</h1>
        </div>

        <button onClick={() => router.push("/pacman")}>
          <img src="/pacman/pacman.png" alt="pacman" />
          <p>Back to Game</p>
        </button>
      </div>

      <p>Welcome!</p>
    </div>
  );
}
