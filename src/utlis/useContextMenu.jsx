import { useState, useEffect } from "react";

const useContextMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  const openContextMenu = (event) => {
    event.preventDefault();
    setMenuVisible(true);
    setMenuPosition({ x: event.clientX, y: event.clientY });
  };

  const handleCloseMenu = () => {
    setMenuVisible(false);
  };

  useEffect(() => {
    const handleClick = () => setMenuVisible(false);
    const handleKey = (event) => {
      if (event.key === "Escape") setMenuVisible(false);
    };

    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  return { menuPosition, handleCloseMenu, openContextMenu, menuVisible };
};

export default useContextMenu;
