import { Outlet } from "react-router-dom";
import Background from "./components/Background";
import IMAGE_MAP from "./constants/image";

function App() {
  return (
    <Background imageUrl={IMAGE_MAP.background}>
      <Outlet />
    </Background>
  );
}

export default App;
