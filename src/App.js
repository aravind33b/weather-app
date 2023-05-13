import React from "react";
import "./styles.css";
import Weather from "./components/Weather";
import { Provider } from "react-redux";
import WeatherStore from "./redux/Store";
import ToggleSwitch from "./toggle/toggleSwitch";
//import WeatherStore, { history } from "./redux/Store";
import { Route } from "react-router-dom";
//import { ConnectedRouter } from "react-router-redux";
import { hourlyForecast } from "./components/hourlyForecast";

const App = () => {
  return (
    <Provider store={WeatherStore}>
      <div className="App">
        {/* <ConnectedRouter history = {history}>
          <Route path = "/" element = {<Weather />}/>
          <Route path = "/forecast" element = {<hourlyForecast/>}/>
        </ConnectedRouter> */}
        <Weather />
      </div>
    </Provider>
    
  );
};

export default App;
