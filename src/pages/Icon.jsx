
import { useNavigate } from "react-router-dom"


const Icon = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col gap-15">
      {/* This PC */}
      
      <div onDoubleClick={() => navigate('/thispc')} draggable={true} className="flex flex-col active:bg-blue-200 items-center w-20">
        <img
          src="/src/assets/this-pc.png"
          alt="This PC"
          draggable={false}
          className="w-12 h-12"
        />
        <p className="text-white text-xs mt-1 text-center">This PC</p>
      </div>

      {/* Recycle Bin */}
      <div draggable={true} className="flex flex-col items-center w-20">
        <img
          src="/src/assets/recycle-bin.png"
          alt="Recycle Bin"
          draggable={false}
          className="w-12 h-12"
        />
        <p className="text-white text-xs mt-1 text-center">Recycle Bin</p>
      </div>

      <div draggable={true} className="flex flex-col items-center w-20">
        <img
          src="/src/assets/folder-icon.png"
          alt="Recycle Bin"
          draggable={false}
          className="w-12 h-12"
        />
        <p className="text-white text-xs mt-1 text-center">New Folder</p>
      </div>
    </div>
  )
}

export default Icon
