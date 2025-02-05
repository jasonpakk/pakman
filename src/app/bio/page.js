"use client";
import { useRouter } from "next/navigation";

export default function Bio() {
  const router = useRouter();

  return (
    <div className="page">
      <div className="pageHeader">
        <div className="title">
          <img src="/pacman/red.png" alt="red" />
          <h1>Bio</h1>
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
