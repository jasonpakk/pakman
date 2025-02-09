"use client";
import { useRouter } from "next/navigation";
import WorkExperience from "./work";
import "./styles.scss";

export default function Experience() {
  const router = useRouter();

  return (
    <div id="experiencePage" className="page">
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

      <div id="experienceContent">
        <img id="desk" src="/experience/desk.gif" alt="desk" />
        <img id="backAvatar" src="/avatar/back.png" alt="back" />
        <img id="cabinet" src="/experience/cabinet.png" alt="cabinet" />

        <WorkExperience />
      </div>
    </div>
  );
}
