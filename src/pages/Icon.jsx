import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Icon = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex flex-col gap-5">
      {/* This PC */}
      <div
        onClick={() => setSelected("pc")}
        onDoubleClick={() => navigate("/thispc")}
        draggable={true}
        className={`flex flex-col items-center w-20 p-1 rounded ${
          selected === "pc" ? "bg-blue-500/40" : ""
        }`}
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
        onClick={() => setSelected("bin")}
        draggable={true}
        className={`flex flex-col items-center w-20 p-1 rounded ${
          selected === "bin" ? "bg-blue-500/40" : ""
        }`}
      >
        <img
          src="/src/assets/recycle-bin.png"
          alt="Recycle Bin"
          draggable={false}
          className="w-12 h-12"
        />
        <p className="text-white text-xs mt-1 text-center">Recycle Bin</p>
      </div>

      {/* Camera */}
      <div
        onClick={() => setSelected("camera")}
        onDoubleClick={() => navigate("/camera")}
        draggable={true}
        className={`flex flex-col items-center w-20 p-1 rounded ${
          selected === "camera" ? "bg-blue-500/40" : ""
        }`}
      >
        <img
          src="/src/assets/camera.png"
          alt="Camera"
          draggable={false}
          className="w-12 h-12 object-contain"
        />
        <p className="text-white text-xs mt-1 text-center">Camera</p>
      </div>

      {/* Folder */}
      <div
        onClick={() => setSelected("folder")}
        draggable={true}
        
        className={`flex flex-col items-center w-20 p-1 rounded ${
          selected === "folder" ? "bg-blue-500/40" : ""
        }`}
      >
        <img
          src="/src/assets/folder-icon.png"
          alt="Folder"
          draggable={false}
          className="w-12 h-12"
        />
        <p className="text-white text-xs mt-1 text-center">New Folder</p>
      </div>
    </div>
  );
};

export default Icon;
