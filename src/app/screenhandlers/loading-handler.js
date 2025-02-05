"use client";

import { useState, useEffect, use } from "react";
import { usePathname } from "next/navigation";
import Loading from "./pacman-loading";

const LoadingHandler = ({ children }) => {
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);
  const [rendered, setRendered] = useState(null);

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

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

  if (width / height < 1.3) {
    return (
      <div className="mobile-warning">
        <h2>Sorry, please increase the width of your screen size.</h2>
      </div>
    );
  }

  return showLoadingScreen ? <Loading pathname={pathname} /> : rendered;
};
export default LoadingHandler;
