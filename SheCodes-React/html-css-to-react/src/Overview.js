import React from "react";
import "./styles.css";

export default function Overview() {
  return (
    <div class="overview">
      <h1 id="city"></h1>
      <ul>
        <li>
          Last updated: <span id="date"></span>
        </li>
        <li id="description"></li>
      </ul>
    </div>
  );
}
