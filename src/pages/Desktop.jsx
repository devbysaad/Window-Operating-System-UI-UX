import Icon from './Icon';

const Desktop = () => {
    
  return (
    <div className="mainDesk relative w-screen h-screen overflow-hidden">
      <img
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover"
        src="/src/assets/b9690ac7ec4b7c94d44d9e519b6c30e7.jpg"
        alt="Wallpaper"
      />

      <div className="relative z-10 flex flex-col gap-6 p-6">
        <div >
          <Icon />
        </div>
      </div>
    </div>
  );
};

export default Desktop;
