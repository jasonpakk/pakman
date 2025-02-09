"use client";
import { useState } from "react";

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
      {isHovering && (
        <div className="hoverText">
          <p>{text}</p>
        </div>
      )}
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
        text="prove me wrong: badminton > tennis"
      />
      <HoverItem
        id="plane"
        src="/bio/plane.png"
        alt="plane"
        text="places i've been: 🇯🇵, 🇰🇷, 🇹🇼, 🇹🇭, 🇩🇪, 🇳🇱, 🇬🇧, 🇫🇷, 🇨🇦"
      />
      <HoverItem
        id="catan"
        src="/bio/catan.png"
        alt="catan"
        text="always goin for that longest road..."
      />
      <HoverItem
        id="dartmouth"
        src="/bio/dartmouth.png"
        alt="dartmouth"
        text="4 years in NH taught me to survive the cold"
      />
      <HoverItem
        id="egg"
        src="/bio/egg.png"
        alt="egg"
        text="over easy, soft boiled, or poached please"
      />
      <HoverItem
        id="headphones"
        src="/bio/headphones.png"
        alt="headphones"
        text="can't work without: noise-cancelling headphones"
      />
      <HoverItem
        id="korea"
        src="/bio/korea.png"
        alt="korea"
        text="i was born in seoul, south korea"
      />
      <HoverItem
        id="matcha"
        src="/bio/matcha.png"
        alt="matcha"
        text="a matcha latte starts my workday"
      />
      <HoverItem
        id="paddle"
        src="/bio/paddle.png"
        alt="paddle"
        text="what i own: two pickleball paddles"
      />
      <HoverItem
        id="piano"
        src="/bio/piano.png"
        alt="piano"
        text="started when i was 4 and have been playing ever since!"
      />
      <HoverItem
        id="pickleball"
        src="/bio/pickleball.png"
        alt="pickleball"
        text="what i don't own: a pickleball"
      />
      <HoverItem
        id="ramen"
        src="/bio/ramen.png"
        alt="ramen"
        text="i love all noodles. spicy? even better."
      />
      <HoverItem
        id="salmon"
        src="/bio/salmon.png"
        alt="salmon"
        text="add me on beli @pakman for some gooood eats"
      />
      <HoverItem
        id="shrimp"
        src="/bio/shrimp.png"
        alt="shrimp"
        text="yumm: szechuan, thai, japanese, korean, vietnamese"
      />
      <HoverItem
        id="switch"
        src="/bio/switch.png"
        alt="switch"
        text="choice of console: my nintendo switch"
      />
      <HoverItem
        id="tuna"
        src="/bio/tuna.png"
        alt="tuna"
        text="formerly: yelp elite"
      />
      <HoverItem
        id="viola"
        src="/bio/viola.png"
        alt="viola"
        text="find me: playing viola in orchestras and ensembles"
      />
    </div>
  );
}
