import React from "react";
import ReactDOM from "react-dom";

import "./App.css";

function App() {
  return <div className="App">
    <h1>Challenge</h1>
    <p>
      Migrate this HTML from index.html to the React index.js
    </p>
    <small>
      <a href="https://reactjs.org/" target="_blank" class="important">
        Official React Website
      </a>
    </small>
  </div>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
