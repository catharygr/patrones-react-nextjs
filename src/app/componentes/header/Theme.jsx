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
    ></button>
  );
}
