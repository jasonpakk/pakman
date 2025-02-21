"use client";
import { useEffect, useState } from "react";

const favicons = [
  "/favicon_1.ico",
  "/favicon_2.ico",
  "/favicon_3.ico",
  "/favicon_4.ico",
];

export default function FaviconRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % favicons.length);
    }, 300); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return <link rel="icon" href={favicons[index]} />;
}
