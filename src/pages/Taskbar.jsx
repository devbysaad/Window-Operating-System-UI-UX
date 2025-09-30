import { Search } from "lucide-react";
import { useState } from "react";

const Taskbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex flex-row justify-center items-center">
      <div className="fixed z-10 bottom-0 h-[50px] w-screen bg-[#1E1E1E] shadow-md flex justify-center items-center gap-3 px-4 border-t-[1px] border-t-gray-800">
        {/* Windows Logo */}
        <img
          onClick={() => setOpen(true)}
          src="/src/assets/windows-11.png"
          alt="Start"
          className="w-8 h-8 cursor-pointer"
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

        {/* Taskbar Icons with Links */}
        <div className="flex items-center gap-5 ml-4">
          <a href="https://www.google.com/chrome/" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/chrome.png" className="w-7 h-7" alt="chrome" />
          </a>
          <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/vscode.png" className="w-7 h-7" alt="vscode" />
          </a>
          <a href="https://chat.openai.com/" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/chatgpt.png" className="w-7 invert-100 h-7" alt="chatgpt" />
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
            <img src="/src/assets/discord.webp" className="w-12 h-12" alt="discord" />
          </a>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        />
      )}

      {/* Windows Menu (Center with Down-to-Up animation) */}
      <div
        className={`fixed bottom-[60px] left-1/2 transform -translate-x-1/2 w-[50%] h-[80%] bg-gray-900 text-white shadow-xl p-6 z-50 rounded-2xl transition-all duration-300 ${
          open ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 text-gray-300 hover:text-white text-xl"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4">Start Menu</h2>
        <ul className="space-y-3">
          <li className="hover:text-amber-300 cursor-pointer">Profile</li>
          <li className="hover:text-amber-300 cursor-pointer">Settings</li>
          <li className="hover:text-amber-300 cursor-pointer">Documents</li>
          <li className="hover:text-amber-300 cursor-pointer">Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default Taskbar;
