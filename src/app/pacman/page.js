"use client";
import { Component } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";

import { EAST, NORTH, WEST, SOUTH } from "./constants";
import getInitialState from "./gameplay/state";
import { animate, changeDirection } from "./functions";

import Board from "./gameplay/board";
import Monster from "./gameplay/monster";
import Food from "./gameplay/food";
import Player from "./gameplay/player";
import "./style.scss";

export default function Pacman(props) {
  const router = useRouter();
  return <Game {...props} router={router} />;
}

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = getInitialState();

    this.onKey = (evt) => {
      // rewrite as a switch statement
      switch (evt.code) {
        case "ArrowRight":
        case "KeyD":
          return this.changeDirection(EAST);
        case "ArrowUp":
        case "KeyW":
          return this.changeDirection(NORTH);
        case "ArrowLeft":
        case "KeyA":
          return this.changeDirection(WEST);
        case "ArrowDown":
        case "KeyS":
          return this.changeDirection(SOUTH);
        default:
          return;
      }
    };

    this.timers = {
      start: null,
      animate: null,
    };
  }

  componentDidMount() {
    window.addEventListener("keydown", this.onKey);
    this.step();
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onKey);

    clearTimeout(this.timers.start);
    clearTimeout(this.timers.animate);
  }

  step() {
    const result = animate(this.state);

    this.setState(result);

    clearTimeout(this.timers.animate);
    this.timers.animate = setTimeout(() => this.step(), 20);
  }

  changeDirection(direction) {
    this.setState(changeDirection(this.state, { direction }));
  }

  handleGhostCapture = (ghost) => {
    const routes = {
      blinky: "/about",
      pinky: "/experience",
      inky: "/projects",
      clyde: "/music",
    };

    this.props.router.push(routes[ghost] || "/");
  };

  restart = () => {
    clearTimeout(this.timers.animate);
    this.setState(getInitialState(), () => {
      this.step();
    });
  };

  render() {
    const { onEnd, ...otherProps } = this.props;
    const props = { gridSize: 15, ...otherProps };

    return (
      <div>
        <div className="pacman">
          <Board {...props} />
          <Food {...props} food={this.state.food} />

          {this.state.monsters.map(({ id, ...monster }) => (
            <Monster key={id} {...props} {...monster} />
          ))}

          <Player
            {...props}
            {...this.state.player}
            lost={this.state.lost}
            onEnd={onEnd}
          />
        </div>

        <button onClick={() => this.handleGhostCapture("blinky")}>
          Capture Blinky
        </button>
        <button onClick={() => this.restart()}>Restart</button>
      </div>
    );
  }
}

Game.propTypes = {
  gridSize: PropTypes.number.isRequired,
  onEnd: PropTypes.func,
};
