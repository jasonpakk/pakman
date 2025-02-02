import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { PLAYER_RADIUS } from "../constants";
import { cssPosition } from "../helpers";
import "./style.scss";

const ANIMATION_SPEED = 30;

function pacmanPath(radius, angle, offset) {
  if (!angle) {
    return [
      `M0,${radius}`,
      `A${radius},${radius} 0 1 0 ${radius * 2},${radius}`,
      `A${radius},${radius} 0 1 0 0,${radius}`,
    ].join(" ");
  }

  const offsetX = radius * Math.cos(angle / 2);
  const offsetY = radius * Math.sin(angle / 2);

  const polarity = (-1) ** Math.floor(offset / 2);
  const m00 = ((offset + 1) % 2) * polarity;
  const m01 = (offset % 2) * polarity;

  const biteX1 = offsetX * m00 - offsetY * m01;
  const biteY1 = -offsetX * m01 - offsetY * m00;
  const biteX2 = offsetX * m00 + offsetY * m01;
  const biteY2 = -offsetX * m01 + offsetY * m00;

  const arcFlag = (angle < Math.PI) >> 0;

  return [
    `M${radius},${radius}`,
    `L${radius + biteX1},${radius + biteY1}`,
    `A${radius},${radius}`,
    `0 ${arcFlag} 0`,
    `${radius + biteX2},${radius + biteY2}`,
    `L${radius},${radius}`,
  ].join(" ");
}

export default function Player({ gridSize, lost, position, direction, onEnd }) {
  const [angle, setAngle] = useState(1);
  const [disappearing, setDisappearing] = useState(false);

  useEffect(() => {
    let biteInterval;

    if (!lost) {
      // Regular mouth opening animation
      setDisappearing(false);
      biteInterval = setInterval(() => {
        setAngle(1 + 0.5 * Math.sin(Date.now() / 50));
      }, ANIMATION_SPEED);
    }

    return () => clearInterval(biteInterval);
  }, [lost]);

  useEffect(() => {
    if (lost) {
      setDisappearing(true);
      let loseInterval = setInterval(() => {
        setAngle((prevAngle) => {
          if (prevAngle >= Math.PI * 2) {
            clearInterval(loseInterval);
            if (onEnd) {
              setTimeout(onEnd, 500); // Small delay before resetting
            }
            return prevAngle;
          }
          return prevAngle + 0.1;
        });
      }, ANIMATION_SPEED);

      return () => clearInterval(loseInterval);
    }
  }, [lost, onEnd]);

  const radius = gridSize * PLAYER_RADIUS;
  const style = {
    ...cssPosition(position, gridSize),
    width: radius * 2,
    height: radius * 2,
    marginLeft: -radius,
    marginTop: -radius,
    opacity: disappearing && angle >= Math.PI * 2 ? 0 : 1, // Slowly disappear when fully lost
    transition: "opacity 0.5s ease-out",
  };

  const offset = lost ? 1 : direction;

  return (
    <svg className="pacman-player" style={style}>
      <path d={pacmanPath(radius, angle, offset)} stroke="none" fill="yellow" />
    </svg>
  );
}

Player.propTypes = {
  gridSize: PropTypes.number.isRequired,
  lost: PropTypes.bool.isRequired,
  position: PropTypes.array.isRequired,
  direction: PropTypes.number.isRequired,
  onEnd: PropTypes.func,
};
