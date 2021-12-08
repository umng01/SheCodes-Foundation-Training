import React from "react";
import Weather from "./Weather";
import "./styles/App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Delhi" />
      </div>
    </div>
  );
}
