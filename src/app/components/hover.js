import { useState } from "react";

export default function HoverItem({ id, src, alt, text }) {
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
        className="hoverImage"
      />
      {isHovering && (
        <div className="hoverText">
          <p>{text}</p>
        </div>
      )}
    </div>
  );
}
