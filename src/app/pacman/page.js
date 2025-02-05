"use client";
import { useRef } from "react";
import Game from "./game";
import { useRouter } from "next/navigation";
import "./style.scss";

export default function Pacman(props) {
  const router = useRouter();
  const gameRef = useRef(null);

  return (
    <div className="gamePage">
      <div className="gameFrame">
        <div className="top">
          <img src="/pakman.png" alt="pacman" />
        </div>

        <div className="game">
          <div className="panel">
            <div id="pacmanText">
              <img src="/pacman/pacman.png" alt="pacman" />
              <p>Move me by using...</p>
            </div>
            <img className="arrows" src="/icons/arrowkeys.png" alt="arrow" />
            <p>or</p>
            <img className="arrows" src="/icons/wasd.png" alt="arrow" />
          </div>

          <Game ref={gameRef} {...props} router={router} />

          <div className="panel">
            <p id="panelHeader">Eat me to learn about my...</p>

            <button className="ghost" onClick={() => router.push("/about")}>
              <img src="/pacman/red.png" alt="red" />
              <p id="red">Bio</p>
            </button>
            <button
              className="ghost"
              onClick={() => router.push("/experience")}
            >
              <img src="/pacman/pink.png" alt="pink" />
              <p id="pink">Experience</p>
            </button>
            <button className="ghost" onClick={() => router.push("/projects")}>
              <img src="/pacman/orange.png" alt="orange" />
              <p id="orange">Projects</p>
            </button>
            <button className="ghost" onClick={() => router.push("/music")}>
              <img src="/pacman/blue.png" alt="blue" />
              <p id="blue">Music</p>
            </button>

            <p id="footer">
              Don't want to play?
              <br />
              Feel free to just click the ghosts above to navigate.
            </p>
          </div>
        </div>
      </div>

      <div className="bottom">
        <button id="restart" onClick={() => gameRef.current?.restart()}>
          <img src="/buttons/wide_green.png" alt="restart" />
          <p>RESTART</p>
        </button>

        <div className="right">
          <img id="joystick" src="/joystick.png" alt="joystick" />

          <div className="buttons">
            <a
              href="mailto:jaeyoung.pak8@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="email"
            >
              <button>
                <img className="buttonImage" src="/buttons/white.png" />
                <img className="buttonIcon" src="/icons/email.png" />
              </button>
            </a>

            <a
              href="https://www.linkedin.com/in/jason-j-pak"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="linkedin"
            >
              <button>
                <img className="buttonImage" src="/buttons/blue.png" />
                <p>in</p>
              </button>
            </a>

            <a
              href="https://github.com/jasonpakk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="github"
            >
              <button>
                <img className="buttonImage" src="/buttons/black.png" />
                <img className="buttonIcon" src="/icons/github.png" />
              </button>
            </a>

            <a
              href="https://drive.google.com/file/d/1SYXlT2gPGgJ6TZSmaoWf__ZdFXRMM-3R/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="resume"
            >
              <button>
                <img className="buttonImage" src="/buttons/yellow.png" />
                <img className="buttonIcon" src="/icons/resume.png" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
