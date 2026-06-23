import { useEffect, useState } from "react";

export function useTheme() {

  const [theme, setTheme] =
    useState("dark");

  useEffect(() => {

    document.documentElement.className =
      theme;

  }, [theme]);

  return {
    theme,
    toggleTheme: () =>
      setTheme(
        theme === "dark"
          ? "light"
          : "dark"
      ),
  };
}