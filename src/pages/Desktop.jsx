import { useEffect, useState } from "react";
import Icon from "./Icon";
import ContextMenu from "./ContextMenu";

const Desktop = () => {
  const [folders, setFolders] = useState([]); // dynamically created folders
  const [contextMenu, setContextMenu] = useState(null);

  // handle right click to open context menu
  const handleRightClick = (e) => {
    e.preventDefault();
    setContextMenu({ x: e.pageX, y: e.pageY });
  };

  // close context menu
  const closeContextMenu = () => setContextMenu(null);

  // ✅ function to create a folder
  const createNewFolder = () => {
    const newFolder = {
      id: Date.now(),
      name: `New Folder (${folders.length + 1})`,
    };
    setFolders((prev) => [...prev, newFolder]);
  };

  // ✅ Detect click on “New Folder” button in ContextMenu (without editing it)
  useEffect(() => {
    const handleClick = (e) => {
      if (
        e.target.textContent === "New Folder" ||
        e.target.innerText === "New Folder"
      ) {
        createNewFolder();
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [folders]);

  return (
    <div
      className="mainDesk relative w-screen h-screen overflow-hidden"
      onContextMenu={handleRightClick}
    >
      {/* Wallpaper */}
      <img
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover"
        src="/src/assets/b9690ac7ec4b7c94d44d9e519b6c30e7.jpg"
        alt="Wallpaper"
      />

      {/* Desktop icons */}
      <div className="relative z-10 flex flex-col gap-6 p-6">
        <Icon />

        {/* ✅ Dynamically created folders */}
        {folders.map((folder) => (
          <div
            key={folder.id}
            className="flex flex-col items-center w-20 p-1 rounded"
          >
            <img
              src="/src/assets/folder-icon.png"
              alt="Folder"
              draggable={false}
              className="w-12 h-12"
            />
            <p className="text-white text-xs mt-1 text-center">{folder.name}</p>
          </div>
        ))}
      </div>

      {/* Context Menu (unchanged) */}
      {contextMenu && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          onClose={closeContextMenu}
        />
      )}
    </div>
  );
};

export default Desktop;
