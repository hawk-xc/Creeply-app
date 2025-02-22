"use client";

import React, { useState, useEffect } from "react";
import { RiSunLine, RiMoonLine } from "@remixicon/react";

const ThemeToggle: React.FC = (): React.JSX.Element => {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" && localStorage.getItem("theme") === "dark"
      ? "dark"
      : "light"
  );

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  return (
    <label className="swap swap-rotate" id="theme-toggle">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <RiSunLine className="swap-on w-6 h-6 text-yellow-500" />
      <RiMoonLine className="swap-off w-6 h-6 text-gray-400" />
    </label>
  );
};

export default ThemeToggle;
