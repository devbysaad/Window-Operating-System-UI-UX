import MainRoutes from './routes/MainRoutes';
import ContextMenu from './pages/ContextMenu';
import useContextMenu from './utlis/useContextMenu';
import Taskbar from './pages/Taskbar';

const App = () => {
  const { menuPosition, handleCloseMenu, openContextMenu, menuVisible } = useContextMenu();

  return (
    <div
      className="bg-gray-600 w-screen h-screen"
      onContextMenu={openContextMenu}
    >
      {menuVisible && (
        <ContextMenu
          x={menuPosition.x}
          y={menuPosition.y}
          onClose={handleCloseMenu}
        />
      )}
      <Taskbar/>
      <MainRoutes />
    </div>
  );
};

export default App;
