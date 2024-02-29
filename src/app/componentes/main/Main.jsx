"use client";

import React from "react";
import Hero from "./Hero";

import { Link } from "react-feather";
import { useState } from "react";

export default function Main() {
  const [hover, setHover] = useState(false);

  // Styles
  const handleEnter = () => {
    setHover(true);
  };

  const handleLeave = () => {
    setHover(false);
  };

  const variants = {
    title: {
      letterSpacing: [0, "0.025rem", 0, "0.025rem", 0],
      transition: { delay: 1, duration: 1 },
    },
  };

  return (
    <main>
      <Hero />
      <div className={styles.info}>
        <p className={styles.categoryExtraBold}>Learning</p>
        <p className={styles.date}>
          Published <time dateTime="2023-12-21">21 Dec 2023</time>
        </p>
        <h1 className={styles.titleExtraBold}>
          <Link
            href="#"
            variants={variants}
            animate="title"
            style={{ color: hover && "hsl(47, 88%, 63%)" }}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            onFocus={handleEnter}
            onBlur={handleLeave}
          >
            HTML & CSS foundations
          </Link>
        </h1>
        <p className="description">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        <div className="author">
          <Image
            className={styles.avatar}
            src={avatar}
            alt="Author picture"
            width={64}
            height={65}
          />
          <p className="name extra-bold">Greg Hooper</p>
        </div>
      </div>
    </main>
  );
}
