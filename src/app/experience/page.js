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

        <WorkExperience />

        <div id="cabinetContainer">
          <img id="cabinet" src="/experience/cabinet.png" alt="cabinet" />
          <div id="cabinetTop">
            <img id="" src="/experience/library.png" alt="my library" />
            <img id="" src="/experience/aws.png" alt="aws" />
          </div>
          <div id="cabinetContent">
            <div className="cabinetRow">
              <img id="" src="/experience/java.png" alt="java" />
              <img id="" src="/experience/html.png" alt="html" />
              <img id="" src="/experience/css.png" alt="css" />
              <img id="" src="/experience/js.png" alt="javascript" />
            </div>
            <div className="cabinetRow">
              <img id="" src="/experience/c.png" alt="c" />
              <img id="" src="/experience/csharp.png" alt="c#" />
              <img id="" src="/experience/python.png" alt="python" />
              <img id="" src="/experience/go.png" alt="golang" />
            </div>
            <div className="cabinetRow">
              <img id="" src="/experience/ts.png" alt="typescript" />
              <img id="" src="/experience/react.png" alt="react" />
              <img id="" src="/experience/angular.png" alt="angular" />
              <img id="" src="/experience/node.png" alt="node js" />
            </div>
            <div className="cabinetRow">
              <img id="" src="/experience/unity.png" alt="unity" />
              <img id="" src="/experience/mongo.png" alt="mongo" />
              <img id="" src="/experience/docker.png" alt="docker" />
              <img id="" src="/experience/figma.png" alt="figma" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
