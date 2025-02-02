import React from "react";
import PropTypes from "prop-types";
import { BOARD_WIDTH, BOARD_HEIGHT, WALL_COLOUR } from "../constants";
import "./style.scss";
import Line from "./line";
import walls from "./walls.json";

function Walls(props) {
  const lineProps = {
    strokeWidth: 2,
    stroke: WALL_COLOUR,
    fill: "none",
  };

  const linesWalls = Object.keys(walls).map((key) => {
    const parts = walls[key].parts.map(([distance, direction, radius]) => ({
      distance,
      direction,
      radius,
    }));

    return (
      <Line
        key={key}
        {...props}
        {...lineProps}
        start={walls[key].start}
        parts={parts}
      />
    );
  });

  return <g className="walls">{linesWalls}</g>;
}

export default function Board(props) {
  const { gridSize } = props;

  const boardWidth = gridSize * BOARD_WIDTH;
  const boardHeight = gridSize * BOARD_HEIGHT;

  return (
    <div className="pacman-board">
      <svg width={boardWidth} height={boardHeight}>
        {/*<rect x={0} y={0} width={boardWidth} height={boardHeight} fill="#000" />*/}
        <Walls {...props} />
      </svg>
    </div>
  );
}

Board.propTypes = {
  gridSize: PropTypes.number.isRequired,
};
