"use client";

import { useState, useEffect } from "react";

const themes = {
  default: {
    name: "ברירת מחדל",
    bg: "#fffdf9",
    accent: "#f8c862",
    text: "#3a3732",
    gold: "#9c7422",
  },
  pink: {
    name: "ורוד עדין",
    bg: "#fef7f7",
    accent: "#ffb3d9",
    text: "#4a3c3c",
    gold: "#d46b8c",
  },
  mint: {
    name: "מנטה רך",
    bg: "#f7fefa",
    accent: "#a8e6cf",
    text: "#3c4a3c",
    gold: "#6bb391",
  },
  lavender: {
    name: "לבנדר",
    bg: "#faf7fe",
    accent: "#d4b3ff",
    text: "#3c3c4a",
    gold: "#8c6bd4",
  },
  peach: {
    name: "אפרסק",
    bg: "#fefaf7",
    accent: "#ffd4b3",
    text: "#4a3c3c",
    gold: "#d48c6b",
  },
};

type ThemeKey = keyof typeof themes;

export default function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState<ThemeKey>("default");

  useEffect(() => {
    const savedTheme = localStorage.getItem("stories-theme") as ThemeKey;
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
      applyTheme(savedTheme);
    }
  }, []);

  const applyTheme = (themeKey: ThemeKey) => {
    const theme = themes[themeKey];
    const root = document.documentElement;

    root.style.setProperty("--background", theme.bg);
    root.style.setProperty("--foreground", theme.text);
    root.style.setProperty("--gold-200", theme.accent);
    root.style.setProperty("--gold-300", theme.accent);
    root.style.setProperty("--gold-600", theme.gold);
    root.style.setProperty("--gold-700", theme.gold);

    // Update background gradient
    const bgGradient = `radial-gradient(1000px 500px at 90% -50%, ${theme.accent}20, transparent),
      radial-gradient(800px 400px at 10% 10%, ${theme.accent}15, transparent),
      radial-gradient(600px 300px at 50% 120%, ${theme.accent}10, transparent)`;

    root.style.setProperty("--bg-gradient", bgGradient);
  };

  const changeTheme = (themeKey: ThemeKey) => {
    setCurrentTheme(themeKey);
    applyTheme(themeKey);
    localStorage.setItem("stories-theme", themeKey);
  };

  return (
    <div className="fixed top-20 left-4 z-40 bg-white/90 backdrop-blur rounded-lg p-3 shadow-lg border border-gold-100">
      <div className="flex flex-col gap-2">
        <span className="text-sm font-semibold text-gold-700 text-center">בחר צבע</span>
        <div className="flex flex-wrap gap-2">
          {Object.entries(themes).map(([key, theme]) => (
            <button
              key={key}
              onClick={() => changeTheme(key as ThemeKey)}
              className={`w-8 h-8 rounded-full border-2 transition-all ${
                currentTheme === key ? "border-gold-600 scale-110" : "border-gray-300"
              }`}
              style={{ backgroundColor: theme.accent }}
              title={theme.name}
              aria-label={`בחר ערכת צבעים ${theme.name}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
