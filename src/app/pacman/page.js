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

        <Game ref={gameRef} {...props} router={router} />
      </div>

      <div className="bottom">
        <button id="restart" onClick={() => gameRef.current?.restart()}>
          <img src="/buttons/wide_green.png" alt="restart" />
          <p>RESTART</p>
        </button>

        <div className="right">
          <img id="joystick" src="/joystick.png" alt="joystick" />

          <div className="buttons">
            <button>
              <img src="/buttons/white.png" />
            </button>
            <button>
              <img src="/buttons/blue.png" />
              <p>in</p>
            </button>
            <button>
              <img src="/buttons/black.png" />
            </button>
            <button>
              <img src="/buttons/yellow.png" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
