"use client";
import { useRouter } from "next/navigation";

export default function Experience() {
  const router = useRouter();

  return (
    <div className="page">
      <div className="pageHeader">
        <div className="title">
          <img src="/pacman/pink.png" alt="pink" />
          <h1>Experience</h1>
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
