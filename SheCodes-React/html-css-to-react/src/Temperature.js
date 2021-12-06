import React from "react";
import "./styles.css";
export default function Temperature() {
  return (
    <div class="row">
      <div class="col-6">
        <div class="clearfix weather-temperature">
          <img src="" alt="Clear" id="icon" class="float-left" />
          <div class="float-left">
            <strong id="temperature"></strong>
            <span class="units">°C</span>
          </div>
        </div>
      </div>
      <div class="col-6">
        <ul>
          <li>
            Humidity: <span id="humidity"></span>%
          </li>
          <li>
            Wind: <span id="wind"></span> km/h
          </li>
        </ul>
      </div>
    </div>
  );
}
