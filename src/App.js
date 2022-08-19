import LogSignWelcome from "./pages/LogSignWelcome";
import GlobalStyle from "./components/GlobalStyle";
import SensorList from "./pages/SensorList";
import {Route, Routes} from "react-router-dom";

const App = ()  =>{

  return (
    <div className="App">
        <GlobalStyle />
      <LogSignWelcome />
        <SensorList />
        <Routes>
            <Route to="/list" element={<SensorList />}/>
        </Routes>
    </div>
  );
}

export default App;
