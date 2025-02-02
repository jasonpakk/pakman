import React from "react";

const pathMap = {
  "/": "Home",
  "/about": "About",
  "/contact": "Contact",
  "/pacman": "Pacman",
};

const Loading = ({ pathname }) => (
  <div className="loading-screen">
    <img src="/loading.gif" alt="Loading..." />
    <h2>Taking you to {pathMap[pathname]}</h2>
  </div>
);

export default Loading;
