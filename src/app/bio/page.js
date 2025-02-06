"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import BioObjects from "./bioobjects";
import Socials from "./socials";
import "./styles.scss";

const HoverItem = ({ id, src, alt, text }) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className="hoverItem">
      <img
        id={id}
        src={src}
        alt={alt}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
      {isHovering && <p>{text}</p>}
    </div>
  );
};

export default function Bio() {
  const router = useRouter();

  return (
    <div id="bioPage" className="page">
      <div className="pageHeader">
        <div className="title">
          <img src="/pacman/red.png" alt="red" />
          <h1>Bio</h1>
        </div>

        <button onClick={() => router.push("/pacman")}>
          <img src="/pacman/pacman.png" alt="pacman" />
          <p>Back to Game</p>
        </button>
      </div>

      <div id="bioContent">
        <img id="avatar" src="/avatar.png" alt="avatar" />

        <Socials />

        <div className="speechBubble">
          <img className="speechImage" src="/icons/speech.png" alt="speech" />
          <p className="speechText">HI, I'M JASON.</p>
        </div>

        <div id="currently" className="browser">
          <div className="header">
            <p className="title">currently</p>
            <p className="x">X</p>
          </div>
          <div className="content">
            <div className="entry">
              <img src="/icons/work.png" alt="work" />
              <p>swe @ capital one</p>
            </div>
            <div className="entry">
              <img src="/icons/pin.png" alt="pin" />
              <p>northern va</p>
            </div>
          </div>
        </div>

        <div id="prev" className="browser">
          <div className="header">
            <p className="title">prev</p>
            <p className="x">X</p>
          </div>
          <div className="content">
            <div className="entry">
              <img src="/icons/grad.png" alt="grad" />
              <p>cs + music @ dartmouth</p>
            </div>
            <div className="entry">
              <img src="/icons/work.png" alt="work" />
              <p>swe @ mathworks, vitalize</p>
            </div>
            <div className="entry">
              <img src="/icons/pin.png" alt="pin" />
              <p>seoul, nh, london, ma</p>
            </div>
          </div>
        </div>

        <BioObjects />
      </div>
    </div>
  );
}
