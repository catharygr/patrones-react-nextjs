"use client";
import { createContext, useContext, useState } from "react";
import styles from "./Menu.module.css";

const MenuContext = createContext();

export const Menu = ({ children }) => {
  const [activeColor, setActiveColor] = useState(null);

  const handleItemClick = (color) => {
    setActiveColor(color);
  };

  return (
    <MenuContext.Provider value={{ activeColor, handleItemClick }}>
      <h1 className={styles.h1}>Menú</h1>
      <ul className={styles.navList}></ul>
      {children}
    </MenuContext.Provider>
  );
};

// Componente que consume el contexto
export const MenuItem = ({ children, color }) => {
  const { activeColor, handleItemClick } = useContext(MenuContext);

  const handleClick = () => {
    handleItemClick(color);
  };

  return (
    <li
      className={styles.navItem}
      onClick={handleClick}
      style={{
        background: color === activeColor ? color : "transparent",
        color: color === activeColor ? "#ffffff" : "#6666666",
      }}
    >
      {children}
    </li>
  );
};
