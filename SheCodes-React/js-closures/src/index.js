import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>JS Closures</h1>
      <h2>Challenge </h2>
      <p>
        Inside the component, Weather, create a function calculating the
        temperature in farenheit. Call this function the JSX being returned
      </p>
      <Weather city="Paris" temperature={19} />
      <Weather city="New York" temperature={22} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
