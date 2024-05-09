import { Outlet } from 'react-router-dom';

import BackgroundMusic from '@/assets/background.mp3';
import Background from './components/Background';
import { ToastContainer } from './components/common/toast';
import Audio from './components/feature/detail/Audio';
import IMAGE_MAP from './constants/image';

function App() {
  return (
    <Background imageUrl={IMAGE_MAP.background}>
      <Outlet />
      <Audio src={BackgroundMusic} />
      <ToastContainer />
    </Background>
  );
}

export default App;
