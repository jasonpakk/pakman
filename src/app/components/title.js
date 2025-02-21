"use client";
import { useEffect, useState } from "react";

const pacmanString =
  "·\xa0\xa0\xa0\xa0·\xa0\xa0\xa0\xa0·\xa0\xa0\xa0\xa0·\xa0\xa0\xa0\xa0·\xa0\xa0\xa0\xa0●\xa0\xa0\xa0\xa0·\xa0\xa0\xa0\xa0·\xa0\xa0\xa0\xa0·\xa0\xa0\xa0\xa0·\xa0\xa0\xa0\xa0ᗣ\xa0\xa0\xa0\xa0";

export default function TitleChanger() {
  const [titleString, setTitleString] = useState(pacmanString);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleString((prev) => {
        return prev.substring(1) + prev.charAt(0);
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.title = titleString;
  }, [titleString]);

  return null; // This component doesn't render anything
}
