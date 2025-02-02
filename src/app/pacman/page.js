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

    this.state = {
      ...getInitialState(),
      playing: false,
      countdown: null, // Track countdown state
    };

    this.onKey = (evt) => {
      if (!this.state.playing && this.state.countdown === null) {
        this.startCountdown();
      }

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
      animate: null,
      countdown: null,
    };
  }

  componentDidMount() {
    window.addEventListener("keydown", this.onKey);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onKey);
    clearTimeout(this.timers.animate);
    clearTimeout(this.timers.countdown);
  }

  startCountdown() {
    let count = 3;
    this.setState({ countdown: count });

    this.timers.countdown = setInterval(() => {
      count -= 1;
      if (count === 0) {
        clearInterval(this.timers.countdown);
        this.setState(
          { countdown: null, playing: true, ...getInitialState() },
          () => {
            this.step();
          }
        );
      } else {
        this.setState({ countdown: count });
      }
    }, 1000);
  }

  step() {
    if (!this.state.playing) return;

    const result = animate(this.state);
    this.setState(result);
    clearTimeout(this.timers.animate);
    this.timers.animate = setTimeout(() => this.step(), 20);
  }

  changeDirection(direction) {
    if (!this.state.playing) return;
    this.setState(changeDirection(this.state, { direction }));
  }

  restart = () => {
    clearTimeout(this.timers.animate);
    clearTimeout(this.timers.countdown);
    this.setState({ playing: false, countdown: null, ...getInitialState() });
  };

  render() {
    const { onEnd, ...otherProps } = this.props;
    const props = { gridSize: 15, ...otherProps };

    return (
      <div>
        {!this.state.playing && this.state.countdown === null && (
          <p>Press any key to start!</p>
        )}
        {this.state.countdown !== null && (
          <p>Starting in {this.state.countdown}...</p>
        )}

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

        <button onClick={() => this.restart()}>Restart</button>
      </div>
    );
  }
}

Game.propTypes = {
  gridSize: PropTypes.number.isRequired,
  onEnd: PropTypes.func,
};
