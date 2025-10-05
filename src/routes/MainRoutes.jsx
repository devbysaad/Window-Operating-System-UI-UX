
import { Route, Routes } from 'react-router-dom'
import Desktop from '../pages/Desktop'
import Window from './../pages/Window';
import StartMenu from './../pages/StartMenu';
import ThisPC from '../pages/ThisPC';
import Cdrive from '../pages/diskPages/Cdrive';
import Camera from '../components/Camera';
import Gallery from './../components/Gallery';

const MainRoutes = () => {
  return (
    <Routes>
  <Route path='/' element={<Desktop />} />
  <Route path='/windows' element={<Window />} />
  <Route path='/start' element={<StartMenu />} />
  <Route path='/thispc' element={<ThisPC />} />
  <Route path='/thispc/cdrive' element={<Cdrive />} />
  <Route path='/camera' element={<Camera />} />
  <Route path='/gallery' element={<Gallery />} />
</Routes>

  )
}

export default MainRoutes