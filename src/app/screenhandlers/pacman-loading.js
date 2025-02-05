import React from "react";

const pathMap = {
  "/": "Home",
  "/bio": "Bio",
  "/experience": "Experience",
  "/projects": "Projects",
  "/music": "Music",
  "/pacman": "to play Pakman",
};

const Loading = ({ pathname }) => (
  <div className="loading-screen">
    <img src="/loading.gif" alt="Loading..." />
    <h2>Taking you to {pathMap[pathname]}</h2>
  </div>
);

export default Loading;
