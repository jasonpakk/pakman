"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import WorkExperience from "./work";
import SkillsLibrary from "./skills";
import Browser from "./browser";
import Socials from "../bio/socials";
import "./styles.scss";

export default function Experience() {
  const router = useRouter();
  const [browserContent, setBrowserContent] = useState("");

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
        <WorkExperience setBrowserContent={setBrowserContent} />

        <SkillsLibrary />
        <p id="clickme">click on an experience to learn more!</p>
        <img id="desk" src="/experience/desk.gif" alt="desk" />
        <img id="backAvatar" src="/avatar/back.png" alt="back" />
        <Socials />
      </div>

      <Browser
        browserContent={browserContent}
        setBrowserContent={setBrowserContent}
      />

      <div id="spacing"></div>
    </div>
  );
}
