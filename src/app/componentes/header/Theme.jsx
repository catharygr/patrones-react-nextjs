"use client";
import React from "react";

import { Moon, Sun } from "react-feather";

export default function Theme(props) {
  const [hover, setHover] = React.useState(false);

  const handleEnter = () => {
    setHover(true);
  };

  const handleLeave = () => {
    setHover(false);
  };

  return (
    <button
      className="theme-btn"
      type="button"
      aria-label="Theme toggle"
      onClick={props.onClick}
      style={{
        position: "fixed",
        top: "0.5rem",
        right: "0.5rem",
        width: "2rem",
        height: "2rem",
      }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={handleLeave}
    >
      <Moon
        style={{
          width: "100%",
          display: props.dark ? "none" : "block",
          color: hover ? "steelblue" : "#99a",
        }}
        aria-hidden="true"
      />
      <Sun
        style={{
          width: "100%",
          display: props.dark ? "block" : "none",
          color: hover ? "goldenrod" : "#99a",
        }}
        aria-hidden="true"
      />
    </button>
  );
}
