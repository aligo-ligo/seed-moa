import { Outlet } from 'react-router-dom';

import BackgroundMusic from '@/assets/background.mp3';
import Background from './components/Background';
import { ToastContainer } from './components/common/toast';
import Audio from './components/feature/detail/Audio';

function App() {
  return (
    <Background>
      <Outlet />
      <Audio src={BackgroundMusic} />
      <ToastContainer />
    </Background>
  );
}

export default App;
