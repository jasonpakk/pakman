import React from "react";

const pathMap = {
  "/": "welcome to pak-man!",
  "/bio": "time to learn more about me...",
  "/experience": "let's explore my experience...",
  "/projects": "booting up my projects...",
  "/music": "warming up my music...",
  "/pacman": "ready to play?",

  "/projects/ardrumset": "get your drumsticks ready...",
  "/projects/botthoven": "bot-thoven is getting warmed up...",
  "/projects/doodlegram": "setting up the notepad for you to doodle...",
  "/projects/fitkitch": "cooking up some fitness fun...",
  "/projects/holisticranching": "ready to herd some cattle?",
  "/projects/leafylearn": "time to start coding with leafy learn...",
  "/projects/mgame": "preparing to set some SMART goals...",
  "/projects/minesweeper": "planting (safe) mines... watch your step!",
  "/projects/spacecolony": "launching you into the space colony...",
  "/projects/terracesurvival":
    "get ready to play the ultimate survival game...",
  "/projects/vrsolar": "sending you up to outer space...",
  "/projects/whattheyap": "get ready to yap and study...",
};

const Loading = ({ pathname }) => (
  <div className="loading-screen">
    <img src="/loading.gif" alt="Loading..." />
    <h2>{pathMap[pathname]}</h2>
  </div>
);

export default Loading;
