import { PLAYER_SPEED, EATING_TIME_SECONDS } from "../constants";
import { playSound } from "./helpers";

import { getNewPosition, getChangedVector, orderPolarity } from "./movement";

function getEatenFood(food, player, newPosition) {
  const { plane, polarity } = orderPolarity(player.direction);

  return food.findIndex(
    ({ position, eaten }) =>
      !eaten &&
      position[1 - plane] === player.position[1 - plane] &&
      polarity * position[plane] >= polarity * player.position[plane] &&
      polarity * position[plane] <= polarity * newPosition[plane]
  );
}

function getNewPlayerVector(player, time) {
  try {
    const { newPosition, movedDistance } = getNewPosition(
      player.position,
      player.direction,
      PLAYER_SPEED,
      time
    );

    if (player.nextDirection !== player.direction) {
      const changedVector = getChangedVector(
        player.position,
        newPosition,
        player.direction,
        player.nextDirection,
        movedDistance
      );

      if (changedVector) {
        return { position: changedVector, direction: player.nextDirection };
      }
    }

    return { position: newPosition };
  } catch (err) {
    // wrapped

    return {};
  }
}

function eatMonsters(state) {
  return {
    ...state,
    monsters: state.monsters.map((monster) => ({
      ...monster,
      eatingTime: EATING_TIME_SECONDS,
    })),
  };
}

let play1 = true;
const foodSound1 = new Audio("/sound/food1.wav");
const foodSound2 = new Audio("/sound/food2.wav");

export function animatePlayer(state, time) {
  const newVector = getNewPlayerVector(state.player, time);
  const eatenFoodIndex = getEatenFood(
    state.food,
    state.player,
    newVector.position
  );
  const food = state.food.slice();
  if (eatenFoodIndex > -1) {
    play1 ? foodSound1.play() : foodSound2.play();
    play1 = !play1;

    food[eatenFoodIndex].eaten = true;
  }

  const eating = eatenFoodIndex > -1 && food[eatenFoodIndex].big;

  const nextState = {
    ...state,
    player: {
      ...state.player,
      ...newVector,
    },
    food,
  };

  if (eating) {
    playSound("/sound/fright.wav", true);
    return eatMonsters(nextState);
  }

  return nextState;
}
