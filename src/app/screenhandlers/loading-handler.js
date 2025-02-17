"use client";

import { useState, useEffect, use } from "react";
import { usePathname } from "next/navigation";
import Loading from "./pacman-loading";

const LoadingHandler = ({ children }) => {
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);
  const [rendered, setRendered] = useState(null);

  const [width, setWidth] = useState(window ? window.innerWidth : 0);
  const [height, setHeight] = useState(window ? window.innerHeight : 0);

  const pathname = usePathname();

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    });
    return () =>
      window.removeEventListener("resize", () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      });
  }, []);

  useEffect(() => {
    setShowLoadingScreen(true);

    const timer = setTimeout(() => {
      setShowLoadingScreen(false);
      setRendered(children);
    }, 2000);

    return () => clearTimeout(timer);
  }, [pathname]); // Run effect on URL change

  if (width / height >= 2.7) {
    return (
      <div className="mobile-warning">
        <h2>Sorry, please increase the HEIGHT of your screen size.</h2>
      </div>
    );
  }

  return showLoadingScreen ? <Loading pathname={pathname} /> : rendered;
};
export default LoadingHandler;
