import React from "react";
import ReactDOM from "react-dom";
import Cities from "./Cities";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Challenge</h1>
      <p>Move all cities into a new component called Cities</p>
      <Cities />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
