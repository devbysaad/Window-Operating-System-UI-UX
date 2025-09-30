import React, { useState } from 'react'
const Window = () => {
  const [Open, setOpen] = useState(false)
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(true)}
        className=" hover:text-amber-300">
        Settings
      </button>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gray-900 text-white shadow-xl p-6 z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-gray-300 hover:text-white text-xl">
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-6">Profile</h2>
      </div>
    </div>

  )
}

export default Window