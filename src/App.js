import LogSignWelcome from "./pages/LogSignWelcome";
import GlobalStyle from "./components/GlobalStyle";
import SensorList from "./pages/SensorList";
import {Route, Routes} from "react-router-dom";
import AboutPage from "./pages/AboutPage";

const App = ()  =>{

  return (
    <>
        <GlobalStyle />
        <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="auth" element={<LogSignWelcome />}/>
            <Route path="list" element={<SensorList />} />
        </Routes>
    </>
  );
}

export default App;
