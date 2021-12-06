import React from "react";
import ReactDOM from "react-dom";
import City from "./City";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Challenge</h1>
      <p>
        Send a property name and temperature to the City component and display
        the properties in the City component
      </p>

      <City name="Delhi" temperature="18" />
      <City name="Mumbai" temperature="28" />
      <City name="Bangalore" temperature="30" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
