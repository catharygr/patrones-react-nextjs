"use client";
import { createContext, useContext, useState } from "react";

const MenuContext = createContext();

export const Menu = ({ children }) => {
  const [activeColor, setActiveColor] = useState(null);

  const handleItemClick = (color) => {
    setActiveColor(color);
  };

  return (
    <MenuContext.Provider value={{ activeColor, setActive }}>
      <h1>Menú</h1>
      <ul
        className={styles.navList}
        style={{ marginBottom: "98px" }}
      ></ul>
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
      onClick={handleClick}
      style={{
        background: color === activeColor ? color : "transparent",
        color: color === activeColor ? "white" : "black",
      }}
    >
      {children}
    </li>
  );
};
