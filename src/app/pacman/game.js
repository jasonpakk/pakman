"use client";
import { Component, forwardRef } from "react";
import PropTypes from "prop-types";

import { EAST, NORTH, WEST, SOUTH } from "./constants";
import getInitialState from "./gameplay/state";
import { animate, changeDirection } from "./functions";

import Board from "./gameplay/board";
import Monster from "./gameplay/monster";
import Food from "./gameplay/food";
import Player from "./gameplay/player";

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...getInitialState(),
      playing: false,
      countdown: null,
      gridSize: this.calculateGridSize(),
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
    if (typeof window === "undefined") return;
    window.addEventListener("keydown", this.onKey);
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    if (typeof window === "undefined") return;
    window.removeEventListener("keydown", this.onKey);
    window.addEventListener("resize", this.handleResize);
    clearTimeout(this.timers.animate);
    clearTimeout(this.timers.countdown);
  }

  calculateGridSize() {
    if (typeof window === "undefined") return;
    return Math.floor(Math.min(window.innerWidth, window.innerHeight) / 43);
  }

  handleResize = () => {
    this.setState({
      gridSize: this.calculateGridSize(),
    });
  };

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
    const props = { gridSize: this.state.gridSize, ...otherProps };

    return (
      <div className="gameContainer">
        <div className="info">
          {!this.state.playing && this.state.countdown === null && (
            <p>Press any key to start!</p>
          )}
          {this.state.countdown !== null && (
            <p>Starting in {this.state.countdown}...</p>
          )}
          {this.state.lost && <p>Game Over!</p>}
        </div>

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
      </div>
    );
  }
}

Game.propTypes = {
  gridSize: PropTypes.number.isRequired,
  onEnd: PropTypes.func,
};

const ForwardedGame = forwardRef((props, ref) => <Game {...props} ref={ref} />);

ForwardedGame.propTypes = {
  gridSize: PropTypes.number.isRequired,
  onEnd: PropTypes.func,
};

export default ForwardedGame;
