import { Search } from "lucide-react";
import { useState } from "react";

const Taskbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex flex-row justify-center items-center">
      {/* Taskbar */}
      <div className="fixed z-10 bottom-0 h-[50px] w-screen bg-[#1E1E1E] shadow-md flex justify-center items-center gap-3 px-4 border-t border-gray-800">
        {/* Windows Logo */}
        <img
          onClick={() => setOpen(!open)}
          src="/src/assets/windows-11.png"
          alt="Start"
          className="w-8 h-8 cursor-pointer transition-transform hover:scale-105"
        />

        {/* Search Bar */}
        <div className="relative w-[240px]">
          <input
            type="search"
            placeholder="Search"
            className="w-full py-2 pl-9 pr-3 rounded-full bg-gray-700 text-white outline-none text-sm"
          />
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>

        {/* Taskbar Icons */}
        <div className="flex items-center gap-5 ml-4">
          <a href="https://www.google.com/chrome/" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/chrome.png" className="w-7 h-7" alt="chrome" />
          </a>
          <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/vscode.png" className="w-7 h-7" alt="vscode" />
          </a>
          <a href="https://chat.openai.com/" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/chatgpt.png" className="w-7 invert h-7" alt="chatgpt" />
          </a>
          <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
            <div className="relative w-7 h-7">
              <img src="/src/assets/whatsapp.png" className="w-full h-full" alt="whatsapp" />
              <span className="absolute -top-1 -right-1 text-[10px] bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                15
              </span>
            </div>
          </a>
          <a href="https://open.spotify.com/" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/spotify.png" className="w-7 h-7" alt="spotify" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <div className="relative w-7 h-7">
              <img src="/src/assets/linkedin.png" className="w-full h-full" alt="linkedin" />
              <span className="absolute -top-1 -right-1 text-[10px] bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                6
              </span>
            </div>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/twitter.png" className="w-7 h-7" alt="twitter" />
          </a>
          <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/discord.webp" className="w-10 h-10" alt="discord" />
          </a>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
        />
      )}

      {/* Connected Window (Start Menu) */}
      <div
        className={`fixed bottom-[60px] left-1/2 transform -translate-x-1/2 w-[600px] h-[650px] bg-[#1E1E1E]/95 text-white shadow-2xl rounded-xl border border-gray-700 z-50 transition-all duration-300 ease-in-out ${
          open ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
        >
          ✕
        </button>

        {/* Search Bar */}
        <div className="flex justify-center mt-6 mb-6">
          <div className="relative w-[80%]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for apps, settings, and documents"
              className="w-full pl-10 pr-4 py-2 rounded-full bg-[#2A2A2A] text-white text-sm outline-none"
            />
          </div>
        </div>

        {/* Pinned Section */}
        <div className="px-8">
          <h3 className="text-gray-400 text-sm mb-3">Pinned</h3>
          <div className="grid grid-cols-6 gap-5">
            {[
              "edge", "microsoft365", "outlook", "store", "settings", "photos",
              "paint", "calculator", "clock", "notepad", "snipping", "facebook",
            ].map((app, i) => (
              <div
                key={i}
                className="flex flex-col items-center hover:bg-[#2A2A2A] p-2 rounded-xl transition cursor-pointer"
              >
                <div className="w-10 h-10 bg-gray-800 rounded-lg mb-1 flex items-center justify-center">
                  <span className="text-lg">🪟</span>
                </div>
                <span className="text-xs text-gray-300 capitalize">{app}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Section */}
        <div className="px-8 mt-8">
          <h3 className="text-gray-400 text-sm mb-3">Recommended</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300 hover:bg-[#2A2A2A] rounded-xl px-3 py-2 cursor-pointer">
              <span>Brave</span>
              <span>Frequently used app</span>
            </div>
            <div className="flex justify-between text-sm text-gray-300 hover:bg-[#2A2A2A] rounded-xl px-3 py-2 cursor-pointer">
              <span>productSlice</span>
              <span>Yesterday at 11:32 AM</span>
            </div>
          </div>
        </div>

        {/* Bottom Profile */}
        <div className="absolute bottom-4 w-full flex items-center justify-between px-8 border-t border-gray-700 pt-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center text-sm font-semibold">
              S
            </div>
            <span className="text-gray-300 text-sm">Saad Chaudhary</span>
          </div>
          <button className="bg-gray-700 hover:bg-gray-600 text-sm px-4 py-1 rounded-full transition">
            Power
          </button>
        </div>
      </div>
    </div>
  );
};

export default Taskbar;
