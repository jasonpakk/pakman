"use client";
import { useRouter } from "next/navigation";
import "./styles.scss";

export default function Projects() {
  const router = useRouter();

  return (
    <div id="projectPage" className="page">
      <div className="pageHeader">
        <div className="title">
          <img src="/pacman/orange.png" alt="orange" />
          <h1>Projects</h1>
        </div>

        <button onClick={() => router.push("/pacman")}>
          <img src="/pacman/pacman.png" alt="pacman" />
          <p>Back to Game</p>
        </button>
      </div>

      <img src="/avatar/projects.gif" alt="projects" />
      <img src="/projects/web.png" alt="web" />
      <img src="/projects/mobile.png" alt="mobile" />
      <img src="/projects/vr.png" alt="vr" />
      <img src="/projects/other.png" alt="other" />
    </div>
  );
}
