import React, { useState, useRef } from "react";

const Icon = () => {
  const [positions, setPositions] = useState({
    thisPC: { x: 0, y: 0 },
    recycleBin: { x: 0, y: 80 },
    newFolder: { x: 0, y: 160 },
  });

  const [dragging, setDragging] = useState(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const onMouseDown = (e, icon) => {
    e.preventDefault();
    setDragging(icon);

    const rect = e.currentTarget.getBoundingClientRect();
    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const onMouseMove = (e) => {
    if (dragging) {
      const containerRect = containerRef.current.getBoundingClientRect();

      let newX = e.clientX - containerRect.left - offset.x;
      let newY = e.clientY - containerRect.top - offset.y;

      newX = Math.max(0, Math.min(newX, containerRect.width - 80));
      newY = Math.max(0, Math.min(newY, containerRect.height - 80));

      setPositions((prev) => ({
        ...prev,
        [dragging]: { x: newX, y: newY },
      }));
    }
  };

  const onMouseUp = () => {
    setDragging(null);
  };

  return (
    <div className="relative w-screen h-screen select-none">
      {/* Background image with absolute positioning and low z-index */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="/src/assets/b9690ac7ec4b7c94d44d9e519b6c30e7.jpg"
        alt="Wallpaper"
        style={{ zIndex: 0 }}
        draggable={false}
      />

      {/* Container for icons with higher z-index */}
      <div
        ref={containerRef}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        className="relative w-full h-full"
        style={{ zIndex: 10, minHeight: "300px" }}
      >
        {/* This PC */}
        <div
          onMouseDown={(e) => onMouseDown(e, "thisPC")}
          style={{
            position: "absolute",
            top: positions.thisPC.y,
            left: positions.thisPC.x,
            cursor: dragging === "thisPC" ? "grabbing" : "grab",
            width: 80,
            userSelect: "none",
          }}
          className="flex flex-col items-center"
        >
          <img
            src="/src/assets/this-pc.png"
            alt="This PC"
            draggable={false}
            className="w-12 h-12"
          />
          <p className="text-white text-xs mt-1 text-center">This PC</p>
        </div>

        {/* Recycle Bin */}
        <div
          onMouseDown={(e) => onMouseDown(e, "recycleBin")}
          style={{
            position: "absolute",
            top: positions.recycleBin.y,
            left: positions.recycleBin.x,
            cursor: dragging === "recycleBin" ? "grabbing" : "grab",
            width: 80,
            userSelect: "none",
          }}
          className="flex flex-col items-center"
        >
          <img
            src="/src/assets/recycle-bin.png"
            alt="Recycle Bin"
            draggable={false}
            className="w-12 h-12"
          />
          <p className="text-white text-xs mt-1 text-center">Recycle Bin</p>
        </div>

        {/* New Folder */}
        <div
          onMouseDown={(e) => onMouseDown(e, "newFolder")}
          style={{
            position: "absolute",
            top: positions.newFolder.y,
            left: positions.newFolder.x,
            cursor: dragging === "newFolder" ? "grabbing" : "grab",
            width: 80,
            userSelect: "none",
          }}
          className="flex flex-col items-center"
        >
          <img
            src="/src/assets/folder-icon.png"
            alt="New Folder"
            draggable={false}
            className="w-12 h-12"
          />
          <p className="text-white text-xs mt-1 text-center">New Folder</p>
        </div>
      </div>
    </div>
  );
};

export default Icon;
