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
    name: "ורוד מתוק",
    bg: "#fef7f9",
    accent: "#ffb3d9",
    text: "#4a3c3c",
    gold: "#d46b8c",
  },
  mint: {
    name: "מנטה רענן",
    bg: "#f7fefa",
    accent: "#a8e6cf",
    text: "#3c4a3c",
    gold: "#6bb391",
  },
  lavender: {
    name: "לבנדר חלומי",
    bg: "#faf7fe",
    accent: "#d4b3ff",
    text: "#3c3c4a",
    gold: "#8c6bd4",
  },
  peach: {
    name: "אפרסק חם",
    bg: "#fefaf7",
    accent: "#ffd4b3",
    text: "#4a3c3c",
    gold: "#d48c6b",
  },
  rainbow: {
    name: "קשת בענן",
    bg: "#fef7fa",
    accent: "#ff9ff3",
    text: "#2d3436",
    gold: "#fd79a8",
  },
  sunshine: {
    name: "שמש זורחת",
    bg: "#fffef7",
    accent: "#ffeaa7",
    text: "#4a3c3c",
    gold: "#d63031",
  },
  ocean: {
    name: "ים כחול",
    bg: "#f7fdff",
    accent: "#74b9ff",
    text: "#2d3436",
    gold: "#0984e3",
  },
};

type ThemeKey = keyof typeof themes;

export default function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState<ThemeKey>("default");
  const [isOpen, setIsOpen] = useState(false);

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

    // Update background gradient based on theme
    let bgGradient = "";
    switch (themeKey) {
      case "rainbow":
        bgGradient = `radial-gradient(1000px 500px at 90% -50%, ${theme.accent}20, transparent),
          radial-gradient(800px 400px at 10% 10%, #74b9ff20, transparent),
          radial-gradient(600px 300px at 50% 120%, #a8e6cf20, transparent)`;
        break;
      case "sunshine":
        bgGradient = `radial-gradient(1000px 500px at 90% -50%, ${theme.accent}25, transparent),
          radial-gradient(800px 400px at 10% 10%, #ffd4b320, transparent),
          radial-gradient(600px 300px at 50% 120%, #ffeaa720, transparent)`;
        break;
      case "ocean":
        bgGradient = `radial-gradient(1000px 500px at 90% -50%, ${theme.accent}20, transparent),
          radial-gradient(800px 400px at 10% 10%, #0984e320, transparent),
          radial-gradient(600px 300px at 50% 120%, #74b9ff15, transparent)`;
        break;
      default:
        bgGradient = `radial-gradient(1000px 500px at 90% -50%, ${theme.accent}20, transparent),
          radial-gradient(800px 400px at 10% 10%, ${theme.accent}15, transparent),
          radial-gradient(600px 300px at 50% 120%, ${theme.accent}10, transparent)`;
    }

    root.style.setProperty("--bg-gradient", bgGradient);
  };

  const changeTheme = (themeKey: ThemeKey) => {
    setCurrentTheme(themeKey);
    applyTheme(themeKey);
    localStorage.setItem("stories-theme", themeKey);
    setIsOpen(false); // Close on mobile after selection
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-20 right-4 z-50 md:hidden bg-white/90 backdrop-blur rounded-full p-3 shadow-lg border border-gold-100 hover:bg-white transition-colors"
        aria-label="פתח בחירת צבעים"
      >
        <span className="text-xl">🎨</span>
      </button>

      {/* Theme Switcher Panel */}
      <div className={`
        fixed z-40 bg-white/95 backdrop-blur rounded-lg shadow-xl border border-gold-100 transition-all duration-300
        ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none md:opacity-100 md:scale-100 md:pointer-events-auto'}
        top-20 left-4 md:top-20 md:left-4
        max-w-xs md:max-w-none
      `}>
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-gold-700">בחר צבע</span>
            <button
              onClick={() => setIsOpen(false)}
              className="md:hidden text-gray-500 hover:text-gray-700 p-1"
              aria-label="סגור"
            >
              ✕
            </button>
          </div>

          <div className="grid grid-cols-4 md:flex md:flex-wrap gap-2">
            {Object.entries(themes).map(([key, theme]) => (
              <button
                key={key}
                onClick={() => changeTheme(key as ThemeKey)}
                className={`
                  w-10 h-10 md:w-8 md:h-8 rounded-full border-2 transition-all hover:scale-110
                  ${currentTheme === key ? "border-gold-600 scale-110 md:scale-110" : "border-gray-300"}
                `}
                style={{ backgroundColor: theme.accent }}
                title={theme.name}
                aria-label={`בחר ערכת צבעים ${theme.name}`}
              />
            ))}
          </div>

          <div className="mt-3 text-xs text-center text-gray-600">
            {themes[currentTheme].name}
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
