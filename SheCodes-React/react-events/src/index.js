import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import Forecast from "./Forecast";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>React Events</h1>

      <h3>Challenge 1</h3>
      <p>
        Create a new component called Weather which renders a "Current
        Temperature" button. Add the button here.
      </p>
      <Weather />

      <h3>Challenge 2</h3>
      <p>
        When the button is clicked, alert "Coming soon..." Add the button here.
      </p>
      <Weather />

      <h3>Challenge 3</h3>
      <p>
        Create a new component called Forecast which renders a link forecast.
        When clicking on it, alert "Forecast feature is not ready yet". Include
        the component here.
      </p>
      <Forecast />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
