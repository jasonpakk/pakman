import React from "react";

const pathMap = {
  "/": "welcome to pakman! ready to power up?",
  "/bio": "flipping through the pages of my story...",
  "/experience": "gearing up with some xp points...",
  "/projects": "booting up my creative lab...",
  "/music": "tuning my strings and warming up...",
  "/pacman": "taking you to the pak-man game...",

  "/projects/ardrumset": "setting up the ar drumsticks... feel the beat!",
  "/projects/botthoven": "bot-thoven is warming up for his performance...",
  "/projects/doodlegram":
    "opening the notepad - prepare your virtual crayons...",
  "/projects/fitkitch": "cooking up some fitness fun...",
  "/projects/holisticranching": "rounding up some digital cattle...",
  "/projects/leafylearn": "sprouting new knowledge...",
  "/projects/mgame": "generating some goals...",
  "/projects/minesweeper": "planting (safe) mines... watch your step!",
  "/projects/spacecolony": "launching into the cosmos...",
  "/projects/terracesurvival":
    "building the ultimate survival strategy game...",
  "/projects/vrsolar": "sending you up to outer space...",
  "/projects/whattheyap": "deciphering the yap... stay tuned!",
};

const Loading = ({ pathname }) => (
  <div className="loading-screen">
    <img src="/loading.gif" alt="Loading..." />
    <h2>{pathMap[pathname]}</h2>
  </div>
);

export default Loading;
