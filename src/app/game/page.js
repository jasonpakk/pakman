"use client";
import { useRouter } from "next/navigation";

export default function Game() {
  const router = useRouter();

  const handleGhostCapture = (ghost) => {
    const routes = {
      blinky: "/about",
      pinky: "/experience",
      inky: "/projects",
      clyde: "/music",
    };

    router.push(routes[ghost] || "/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Pak-Man</h1>
      <div className="game-container">
        {/* Replace buttons with actual game logic */}
        <button onClick={() => handleGhostCapture("blinky")}>Capture Blinky</button>
      </div>
    </div>
  );
}
