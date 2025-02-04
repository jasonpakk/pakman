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
        <img src="/joystick.png" alt="joystick" />
        <button onClick={() => gameRef.current?.restart()}>Restart</button>
      </div>
    </div>
  );
}
