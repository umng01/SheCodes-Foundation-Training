import React from "react";
import ReactDOM from "react-dom";
import Cities from "./Cities";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <h3>Challenge 1</h3>
      <p>
        Create a new component called Header included in Cities, rendering "The
        list of cities is:" and include it at the top of all cities.
        <Cities />
      </p>
      <br />
      <h3>Challenge 2</h3>
      <p>
        Create a new component called Footer included in Cities, rendering
        "Contact us to add more cities" and include it at the Bottom of all
        cities.
        <Cities />
      </p>
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
