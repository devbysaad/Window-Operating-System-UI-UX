import { Folder, Fullscreen, HardDrive, Home, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FileExplorer = () => {
    const navigate = useNavigate();
   
    return (
        <div className="w-screen h-screen flex flex-col bg-[#1e1e1e] text-white">
            {/* Top Window Controls + Menu */}
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
                    <button onClick={() => navigate(-1)} className="w-10 h-8 flex items-center justify-center hover:bg-red-600">
                        <span className="text-white text-lg">×</span>
                    </button>
                </div>
            </div>

            {/* Address Bar */}
            <div className="bg-[#2f2f2f] px-4 py-2 flex items-center shadow-[inset_0_-1px_0_rgba(255,255,255,0.05)]">
                <HardDrive className="w-4 h-4 mr-2" />
                <span className="text-sm">This PC</span>
                <div className="ml-auto flex items-center bg-[#1e1e1e] px-2 py-1 rounded">
                    <Search className="w-4 h-4 text-gray-400 mr-1" />
                    <input
                        type="text"
                        placeholder="Search This PC"
                        className="bg-transparent text-xs outline-none text-gray-200"
                    />
                </div>
            </div>

            {/* Main Section */}
            <div className="flex flex-1 h-full">
                {/* Sidebar */}
                <div className="w-[20%] bg-[#252525] p-3 text-sm shadow-[inset_-1px_0_0_rgba(255,255,255,0.05)]">
                    <div className="mb-2 font-semibold">Quick Access</div>
                    <div className="space-y-2 text-gray-300">
                        <div className="flex items-center gap-2"><Home size={16} /> Desktop</div>
                        <div className="flex items-center gap-2"><Folder size={16} /> Documents</div>
                        <div className="flex items-center gap-2"><Folder size={16} /> Downloads</div>
                    </div>

                    <div className="mt-4 font-semibold">This PC</div>
                    <div className="space-y-2 text-gray-300 mt-1">
                        <div className="flex items-center gap-2"><HardDrive size={16} /> Local Disk (C:)</div>
                        <div className="flex items-center gap-2"><HardDrive size={16} /> Local Disk (D:)</div>
                    </div>
                </div>

                {/* Drives Area */}
                <div className="w-[80%] h-full bg-[#1e1e1e] p-4 overflow-y-auto">
                    <summary className="text-white list-none mb-4">Devices and drives</summary>

                    <div className="flex flex-wrap gap-4 text-white">
                        {/* Drive 1 - Red */}
                        <div
                            onDoubleClick={() => navigate("/thispc/cdrive")}
                            className="flex items-center p-3 rounded-lg cursor-pointer hover:bg-gray-700 w-80"
                        >
                            <img src="/src/assets/hard-drive.png" alt="C" className="w-12 h-12" />
                            <div className="flex-1 ml-3">
                                <div className="text-sm font-semibold">Local Disk (C:)</div>
                                <div className="h-4 bg-gray-700 rounded-[2px] mt-1 overflow-hidden">
                                    <div className="h-full bg-red-500" style={{ width: "92%" }}></div>
                                </div>
                                <div className="text-xs mt-1 text-gray-300">12 GB free of 200 GB</div>
                            </div>
                        </div>

                        {/* Drive 2 - Blue */}
                        <div className="flex items-center p-3 rounded-lg hover:bg-gray-700 w-80">
                            <img src="/src/assets/driver.png" alt="D" className="w-12 h-12" />
                            <div className="flex-1 ml-3">
                                <div className="text-sm font-semibold">Local Disk (D:)</div>
                                <div className="h-4 bg-gray-700 rounded-[2px] mt-1 overflow-hidden">
                                    <div className="h-full bg-blue-500" style={{ width: "55%" }}></div>
                                </div>
                                <div className="text-xs mt-1 text-gray-300">110 GB free of 200 GB</div>
                            </div>
                        </div>

                        {/* Drive 3 - Red */}
                        <div className="flex items-center p-3 rounded-lg hover:bg-gray-700 w-80">
                            <img src="/src/assets/driver.png" alt="E" className="w-12 h-12" />
                            <div className="flex-1 ml-3">
                                <div className="text-sm font-semibold">Local Disk (E:)</div>
                                <div className="h-4 bg-gray-700 rounded-[2px] mt-1 overflow-hidden">
                                    <div className="h-full bg-red-500" style={{ width: "88%" }}></div>
                                </div>
                                <div className="text-xs mt-1 text-gray-300">25 GB free of 200 GB</div>
                            </div>
                        </div>

                        {/* Drive 4 - Blue */}
                        <div className="flex items-center p-3 rounded-lg hover:bg-gray-700 w-80">
                            <img src="/src/assets/driver.png" alt="F" className="w-12 h-12" />
                            <div className="flex-1 ml-3">
                                <div className="text-sm font-semibold">Local Disk (F:)</div>
                                <div className="h-4 bg-gray-700 rounded-[2px] mt-1 overflow-hidden">
                                    <div className="h-full bg-blue-500" style={{ width: "40%" }}></div>
                                </div>
                                <div className="text-xs mt-1 text-gray-300">120 GB free of 200 GB</div>
                            </div>
                        </div>

                        {/* Drive 5 - Blue */}
                        <div className="flex items-center p-3 rounded-lg hover:bg-gray-700 w-80">
                            <img src="/src/assets/driver.png" alt="G" className="w-12 h-12" />
                            <div className="flex-1 ml-3">
                                <div className="text-sm font-semibold">Local Disk (G:)</div>
                                <div className="h-4 bg-gray-700 rounded-[2px] mt-1 overflow-hidden">
                                    <div className="h-full bg-blue-500" style={{ width: "70%" }}></div>
                                </div>
                                <div className="text-xs mt-1 text-gray-300">140 GB free of 200 GB</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FileExplorer;
