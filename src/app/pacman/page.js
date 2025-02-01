"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";

import { EAST, NORTH, WEST, SOUTH } from "./constants";
import getInitialState from "./state";
import { animate, changeDirection } from "./game";

import Board from './Board';
import Scores from './Scores';
import Monster from './Monster';
import AllFood from './AllFood';
import Player from './Player';
import "./style.scss";

export default function Pacman({ gridSize = 12, onEnd }) {
  const router = useRouter();

  const [gameState, setGameState] = useState(getInitialState());
  const timers = useRef({ start: null, animate: null });

  const changeDirectionHandler = useCallback((direction) => {
    setGameState((prevState) => changeDirection(prevState, { direction }));
  }, []);

  const onKey = useCallback((evt) => {
    if (evt.key === "ArrowRight") return changeDirectionHandler(EAST);
    if (evt.key === "ArrowUp") return changeDirectionHandler(NORTH);
    if (evt.key === "ArrowLeft") return changeDirectionHandler(WEST);
    if (evt.key === "ArrowDown") return changeDirectionHandler(SOUTH);
  }, [changeDirectionHandler]);

  useEffect(() => {
    window.addEventListener("keydown", onKey);

    timers.current.start = setTimeout(() => {
      setGameState((prevState) => ({ ...prevState, stepTime: Date.now() }));
      step();
    }, 3000);

    return () => {
      window.removeEventListener("keydown", onKey);
      clearTimeout(timers.current.start);
      clearTimeout(timers.current.animate);
    };
  }, [onKey]);

  const step = useCallback(() => {
    setGameState((prevState) => animate(prevState));

    clearTimeout(timers.current.animate);
    timers.current.animate = setTimeout(step, 20);
  }, []);

  const handleGhostCapture = (ghost) => {
    const routes = {
      blinky: "/about",
      pinky: "/experience",
      inky: "/projects",
      clyde: "/music",
    };

    router.push(routes[ghost] || "/");
  };

  const props = { gridSize: 20 };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Pak-Man</h1>
      <div className="pacman">
        <Board gridSize={gridSize} />
        <Scores score={gameState.score} lost={gameState.lost} />
        <AllFood gridSize={gridSize} food={gameState.food} />

        {gameState.monsters.map(({ id, ...monster }) => (
          <Monster key={id} gridSize={gridSize} {...monster} />
        ))}

        <Player gridSize={gridSize} {...gameState.player} lost={gameState.lost} onEnd={onEnd} />

        <button onClick={() => handleGhostCapture("blinky")}>Capture Blinky</button>
      </div>
    </div>
  );
}

Pacman.propTypes = {
  gridSize: PropTypes.number.isRequired,
  onEnd: PropTypes.func,
};

