import React from "react";
import ReactDOM from "react-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Challenge</h1>
      <p>
        Make european cities blue and north american cities red from CSS in
        React
      </p>

      <ul>
        <li>Sydney</li>
        <li className="europian">Paris</li>
        <li className="american">Montreal</li>
        <li className="europian">Lisbon</li>
        <li className="american">San Francisco</li>
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
