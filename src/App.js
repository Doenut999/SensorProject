import LogSignWelcome from "./pages/LogSignWelcome";
import GlobalStyle from "./components/GlobalStyle";
import SensorList from "./pages/SensorList";
import {Route, Routes} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import FuelSensorIframe from "./components/youtubes/FuelSensorIframe";
import OilLevelSensor from "./components/youtubes/OilLevelSensor";
import OxygenSensor from "./components/youtubes/OxygenSensor";
import ThrottlePositionSensor from "./components/youtubes/ThrottlePositionSensor";
import KnockSensor from "./components/youtubes/KnockSensor";
import MassAirFlow from "./components/youtubes/MassAirFlow";
import CoolantTemperature from "./components/youtubes/CoolantTemperature";
import CrankShaft from "./components/youtubes/CrankShaft";

const App = ()  =>{

  return (
    <>
        <GlobalStyle />
        <Routes>
            {/*<Route path="/" element={<AboutPage />} />*/}
            {/*<Route path="auth" element={<LogSignWelcome />}/>*/}
            {/*<Route path="list" element={<SensorList />} />*/}
            {/*//Pages to each Sensors YouTube>*/}
            {/*<Route path="fuel-sensor" element={<FuelSensorIframe />} />*/}
            {/*<Route path="oxygen-sensor" element={<OxygenSensor />} />*/}
            {/*<Route path="coolant-temp-sensor" element={<CoolantTemperature />} />*/}
            {/*<Route path="oil-level-sensor" element={<OilLevelSensor />} />*/}
            {/*<Route path="crankshaft-sensor" element={<CrankShaft />} />*/}
            {/*<Route path="knock-sensor" element={<KnockSensor />} />*/}
            {/*<Route path="mass-airflow-sensor" element={<MassAirFlow />} />*/}
            {/*<Route path="throttle-position-sensor" element={<ThrottlePositionSensor />} />*/}
        </Routes>
    </>
  );
}

export default App;
