"use client";
import { useRouter } from "next/navigation";

export default function TerraceSurvival() {
  const router = useRouter();

  return (
    <div className="page">
      <div className="pageHeader" style={{ alignSelf: "flex-end" }}>
        <button onClick={() => router.push("/projects")}>
          <img src="/pacman/orange.png" alt="orange" />
          <p>Back to Projects</p>
        </button>
      </div>

      <h1>Project Name</h1>
    </div>
  );
}
