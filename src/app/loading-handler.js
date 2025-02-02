"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Loading from "./pacman-loading";

const LoadingHandler = ({ children }) => {
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);
  const [rendered, setRendered] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    setShowLoadingScreen(true);

    const timer = setTimeout(() => {
      setShowLoadingScreen(false);
      setRendered(children);
    }, 2000);

    return () => clearTimeout(timer);
  }, [pathname]); // Run effect on URL change

  return showLoadingScreen ? <Loading pathname={pathname} /> : rendered;
};
export default LoadingHandler;
