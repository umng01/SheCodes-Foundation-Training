import React from "react";

export default function Weather(props) {
  function convertToFahrenheit() {
    let fahrenheit = props.temperature * (9 / 5) + 32;
    let roundedFahrenheit = Math.round(fahrenheit);
    return roundedFahrenheit;
  }

  return (
    <div className="Weather">
      The temperature in {props.city} is {props.temperature}°C and{" "}
      {convertToFahrenheit()}°F
    </div>
  );
}
