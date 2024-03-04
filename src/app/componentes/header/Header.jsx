/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import Theme from "./Theme";

export default function Header() {
  const [dark, setDark] = useState(false);
  const [root, setRoot] = useState(null);

  useEffect(() => {
    setRoot(document.querySelector(":root"));
  }, []);

  useEffect(() => {
    if (root) {
      root.classList.add("theme");
      const mode = localStorage.getItem("mode");
      if (mode && mode === "dark") {
        root.classList.add("dark");
        setDark(true);
      }
    }
  }, [root]);

  const handleToggle = () => {
    setDark((prevDark) => !prevDark);
    if (root) {
      root.classList.toggle("dark");
      if (root.classList.contains("dark")) {
        localStorage.setItem("mode", "dark");
      } else {
        localStorage.setItem("mode", "light");
      }
    }
  };

  return (
    <header>
      <Theme
        dark={dark}
        onClick={handleToggle}
      />
    </header>
  );
}
