import { useEffect, useRef } from "react";

const ContextMenu = ({ x, y, onClose }) => {
  const menuRef = useRef(null);

  // ✅ Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const refreshHandler = () => {
    console.log("Refresh clicked");
    onClose();
    location.reload();
  };

  const createNewFolder = (e) => {
    console.log("Create folder clicked");
    // Let Desktop.jsx detect this click
    const event = new CustomEvent("newFolderClick");
    window.dispatchEvent(event);
    onClose();
  };

  return (
    <div
      ref={menuRef}
      className="absolute z-50"
      style={{ top: y, left: x }}
    >
      <div className="w-56 bg-[#1E1E1E] text-white rounded-lg shadow-lg py-2">
        <button
          onClick={() => { console.log("View clicked"); onClose(); }}
          className="flex items-center w-full px-4 py-2 text-sm hover:bg-[#2A2A2A]"
        >
          View
        </button>
        <button
          onClick={() => { console.log("Sort clicked"); onClose(); }}
          className="flex items-center w-full px-4 py-2 text-sm hover:bg-[#2A2A2A]"
        >
          Sort by
        </button>
        <button
          onClick={refreshHandler}
          className="flex items-center w-full px-4 py-2 text-sm hover:bg-[#2A2A2A]"
        >
          Refresh
        </button>

        <div className="border-t border-gray-700 my-1"></div>

        <button
          onClick={() => { console.log("Undo clicked"); onClose(); }}
          className="flex items-center w-full px-4 py-2 text-sm hover:bg-[#2A2A2A]"
        >
          Undo Delete <span className="ml-auto text-gray-400">Ctrl+Z</span>
        </button>

        <button
          onClick={createNewFolder}
          className="flex items-center w-full px-4 py-2 text-sm hover:bg-[#2A2A2A]"
        >
          New Folder
        </button>

        <div className="border-t border-gray-700 my-1"></div>

        <button
          onClick={() => { console.log("Display settings clicked"); onClose(); }}
          className="flex items-center w-full px-4 py-2 text-sm hover:bg-[#2A2A2A]"
        >
          Display settings
        </button>
        <button
          onClick={() => { console.log("Personalize clicked"); onClose(); }}
          className="flex items-center w-full px-4 py-2 text-sm hover:bg-[#2A2A2A]"
        >
          Personalize
        </button>
        <button
          onClick={() => { console.log("Open in Terminal clicked"); onClose(); }}
          className="flex items-center w-full px-4 py-2 text-sm hover:bg-[#2A2A2A]"
        >
          Open in Terminal
        </button>
        <button
          onClick={() => { console.log("Show more options clicked"); onClose(); }}
          className="flex items-center w-full px-4 py-2 text-sm hover:bg-[#2A2A2A]"
        >
          Show more options
        </button>
      </div>
    </div>
  );
};

export default ContextMenu;
