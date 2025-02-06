"use client";
import { useState } from "react";
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

export default function BioObjects() {
  return (
    <div id="bioObjects">
      <HoverItem
        id="badminton"
        src="/bio/badminton.png"
        alt="badminton"
        text="This is badminton."
      />
      <HoverItem
        id="catan"
        src="/bio/catan.png"
        alt="catan"
        text="This is catan."
      />
      <HoverItem
        id="chicken"
        src="/bio/chicken.png"
        alt="chicken"
        text="This is chicken."
      />
      <HoverItem
        id="dartmouth"
        src="/bio/dartmouth.png"
        alt="dartmouth"
        text="This is dartmouth."
      />
      <HoverItem
        id="dumplings"
        src="/bio/dumplings.png"
        alt="dumplings"
        text="This is dumplings."
      />
      <HoverItem id="egg" src="/bio/egg.png" alt="egg" text="This is egg." />
      <HoverItem
        id="headphones"
        src="/bio/headphones.png"
        alt="headphones"
        text="This is headphones."
      />
      <HoverItem
        id="icecream"
        src="/bio/icecream.png"
        alt="icecream"
        text="This is ice cream."
      />
      <HoverItem
        id="kirby"
        src="/bio/kirby.png"
        alt="kirby"
        text="This is kirby."
      />
      <HoverItem
        id="korea"
        src="/bio/korea.png"
        alt="korea"
        text="This is korea."
      />
      <HoverItem
        id="latte"
        src="/bio/latte.png"
        alt="latte"
        text="This is latte."
      />
      <HoverItem
        id="mango"
        src="/bio/mango.png"
        alt="mango"
        text="This is mango."
      />
      <HoverItem
        id="matcha"
        src="/bio/matcha.png"
        alt="matcha"
        text="This is matcha."
      />
      <HoverItem
        id="notes"
        src="/bio/notes.png"
        alt="notes"
        text="This is notes."
      />
      <HoverItem
        id="notes2"
        src="/bio/notes2.png"
        alt="notes2"
        text="This is notes."
      />
      <HoverItem
        id="paddle"
        src="/bio/paddle.png"
        alt="paddle"
        text="This is pickleball."
      />
      <HoverItem
        id="piano"
        src="/bio/piano.png"
        alt="piano"
        text="This is piano."
      />
      <HoverItem
        id="pickleball"
        src="/bio/pickleball.png"
        alt="pickleball"
        text="This is pickleball."
      />
      <HoverItem
        id="plant"
        src="/bio/plant.png"
        alt="plant"
        text="This is plant."
      />
      <HoverItem
        id="plant2"
        src="/bio/plant2.png"
        alt="plant2"
        text="This is plant."
      />
      <HoverItem
        id="ramen"
        src="/bio/ramen.png"
        alt="ramen"
        text="This is ramen."
      />
      <HoverItem
        id="salmon"
        src="/bio/salmon.png"
        alt="salmon"
        text="This is salmon."
      />
      <HoverItem
        id="shrimp"
        src="/bio/shrimp.png"
        alt="shrimp"
        text="This is work."
      />
      <HoverItem
        id="switch"
        src="/bio/switch.png"
        alt="switch"
        text="This is switch."
      />
      <HoverItem
        id="tuna"
        src="/bio/tuna.png"
        alt="tuna"
        text="This is tuna."
      />
      <HoverItem
        id="viola"
        src="/bio/viola.png"
        alt="viola"
        text="This is viola."
      />
    </div>
  );
}
