"use client";

import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [isMounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!isMounted) return null;
  return (
    <div className=" grid place-items-center">
      {theme === "light" ? (
        <button onClick={() => setTheme("dark")}>
          <MoonStar />
        </button>
      ) : (
        <button onClick={() => setTheme("light")}>
          <Sun />
        </button>
      )}
    </div>
  );
};

export default ThemeSwitcher;
