import { createContext, useContext, useState } from "react";

const MenuContext = createContext();

export const Menu = ({ children }) => {
  const [activeColor, setActiveColor] = useState(null);

  const handleSetActive = (color) => {
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
  const { activeColor, setActiveColor } = useContext(MenuContext);

  const handleClick = () => {
    setActiveColor(color);
  };

  return (
    <li
      style={{
        color: activeColor === color ? color : "black",
        cursor: "pointer",
      }}
      onClick={() => setActiveColor(color)}
    >
      {children}
    </li>
  );
};
