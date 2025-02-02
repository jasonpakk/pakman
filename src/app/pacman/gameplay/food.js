import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { cssPosition } from "../functions/helpers";
import "./style.scss";

function FoodIcon({ gridSize, position, eaten, big }) {
  const className = classNames("food", { eaten, big });

  const style = cssPosition(position, gridSize);

  return <span className={className} style={style} />;
}

FoodIcon.propTypes = {
  gridSize: PropTypes.number.isRequired,
  position: PropTypes.array.isRequired,
  eaten: PropTypes.bool.isRequired,
  big: PropTypes.bool.isRequired,
};

export default function Food({ food, ...props }) {
  const items = food
    .filter(({ eaten }) => !eaten)
    .map(({ key, ...item }) => <FoodIcon key={key} {...item} {...props} />);

  return <div className="food-all">{items}</div>;
}

Food.propTypes = {
  food: PropTypes.array.isRequired,
};
