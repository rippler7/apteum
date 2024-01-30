import { useState, useEffect } from "react";

const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: light)").matches;

const useThemeDetect = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(getCurrentTheme());

  const mqListener = (e: MediaQueryListEvent) => {
    setIsDarkTheme(e.matches);
  };

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: light)");
    darkThemeMq.addListener(mqListener);

    return () => darkThemeMq.removeListener(mqListener);
  }, []);

  return isDarkTheme;
};

export default useThemeDetect;