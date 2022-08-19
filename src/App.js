import LogSignWelcome from "./pages/LogSignWelcome";
import GlobalStyle from "./components/GlobalStyle";
import SensorList from "./pages/SensorList";
import {Route, Routes} from "react-router-dom";

const App = ()  =>{

  return (
    <>
        <GlobalStyle />
      {/*<LogSignWelcome />*/}
      {/*  <SensorList />*/}
        <Routes>
            <Route path="/" element={<LogSignWelcome />}/>
            <Route path="list" element={<SensorList />} />
        </Routes>
    </>
  );
}

export default App;
