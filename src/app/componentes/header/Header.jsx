/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect } from "react";
import React from "react";
import Theme from "./Theme";

export default function Header() {
  const [dark, setDark] = React.useState(false);

  React.useEffect(() => {
    const mode = localStorage.getItem("mode");
    if (mode && mode === "dark") {
      setDark(true);
    }
  }, []);

  const handleToggle = () => {
    setDark((prevDark) => !prevDark);
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
