import { Folder } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Cdrive = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full h-screen bg-[#1e1e1e] text-white flex flex-col">
      <div className="flex w-full justify-between bg-[#2b2b2b] shadow-[inset_0_-1px_0_rgba(255,255,255,0.05)]">
        {/* Left Menu */}
        <div className="px-4 py-2 flex items-center text-sm">
          <span className="mr-6 cursor-default">File</span>
          <span className="mr-6 cursor-default">Home</span>
          <span className="mr-6 cursor-default">Share</span>
          <span className="cursor-default">View</span>
        </div>

        {/* Right Window Controls */}
        <div className="px-4 py-2 flex justify-end items-center select-none">
          {/* Minimize */}
          <button className="w-10 h-8 mt-2 flex items-center justify-center hover:bg-[#3a3a3a]">
            <span className="text-white text-lg -mt-2">−</span>
          </button>

          {/* Maximize / Snap */}
          <button className="w-10 h-8 flex items-center justify-center hover:bg-[#3a3a3a]">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <rect x="6" y="6" width="12" height="12" stroke="white" />
            </svg>
          </button>

          {/* Close */}
          <button onClick={() => navigate('/')} className="w-10 h-8 flex items-center justify-center hover:bg-red-600">
            <span className="text-white text-lg">×</span>
          </button>
        </div>
      </div>
      {/* Top bar */}
      <div className="flex items-center justify-between bg-[#2b2b2b] px-4 py-2 border-b border-gray-700">
        <h1 className="text-sm font-semibold">Local Disk (C:)</h1>
        <span className="text-xs text-gray-400">12 GB free of 200 GB</span>
      </div>

      {/* Folder area */}
      <div className="flex-1  grid grid-cols-6 gap-6 p-6">
        {/* Example folder */}
        <div className="flex flex-col items-center text-center cursor-pointer  p-3 rounded-lg">
          <Folder className="w-12 h-12 text-yellow-400" />
          <span className="text-xs mt-2">Windows</span>
        </div>

        <div className="flex flex-col items-center text-center cursor-pointer  p-3 rounded-lg">
          <Folder className="w-12 h-12 text-yellow-400" />
          <span className="text-xs mt-2">Program Files</span>
        </div>

        <div className="flex flex-col items-center text-center cursor-pointer  p-3 rounded-lg">
          <Folder className="w-12 h-12 text-yellow-400" />
          <span className="text-xs mt-2">Users</span>
        </div>

        <div className="flex flex-col items-center text-center cursor-pointer  p-3 rounded-lg">
          <Folder className="w-12 h-12 text-yellow-400" />
          <span className="text-xs mt-2">System32</span>
        </div>
      </div>
    </div>
  );
};

export default Cdrive;
