import { BOARD_HEIGHT } from "../constants";

export function cssPosition(position, gridSize) {
  return {
    left: (position[0] + 1.5) * gridSize,
    top: (BOARD_HEIGHT - position[1] - 3) * gridSize,
  };
}

const soundPlayer = new Audio(); // Shared Audio object

export function playSound(src, loop = false) {
  if (soundPlayer.src !== window.location.origin + src) {
    soundPlayer.pause(); // Stop any currently playing sound
    soundPlayer.currentTime = 0; // Reset the playback position
    soundPlayer.src = src; // Set the new sound source
  }

  soundPlayer.loop = loop;

  // Ensure the sound starts fresh after resetting
  soundPlayer.play().catch((error) => {
    if (error.name !== "AbortError") {
      console.error("Audio playback error:", error);
    }
  });
}

export function stopSound(src) {
  if (soundPlayer.src === window.location.origin + src) {
    soundPlayer.pause(); // Stop any currently playing sound
    soundPlayer.currentTime = 0; // Reset the playback position
    soundPlayer.src = ""; // Clear the sound source
  }
}
