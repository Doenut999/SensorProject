import LogSignWelcome from "./pages/LogSignWelcome";
import GlobalStyle from "./components/GlobalStyle";
import SensorList from "./pages/SensorList";
import {Route, Routes} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import FuelSensorIframe from "./components/youtubes/FuelSensorIframe";
import OilLevelSensor from "./components/youtubes/OilLevelSensor";
import OxygenSensor from "./components/youtubes/OxygenSensor";

const App = ()  =>{

  return (
    <>
        <GlobalStyle />
        <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="auth" element={<LogSignWelcome />}/>
            <Route path="list" element={<SensorList />} />
            <Route path="fuel-sensor" element={<FuelSensorIframe />} />
            <Route path="oxygen-sensor" element={<OxygenSensor />} />
            <Route path="oil-level-sensor" element={<OilLevelSensor />} />
        </Routes>
    </>
  );
}

export default App;
