import React from "react";
import "./styles.css";
export default function Search() {
  return (
    <form id="search-form" class="mb-3">
      <div class="cloud1"></div>
      <div class="row">
        <div class="col-9">
          <input
            type="search"
            placeholder="Type a city.."
            class="form-control"
            id="city-input"
            autocomplete="off"
          />
        </div>
        <div class="col-3">
          <input type="submit" value="Search" class="btn w-100" />
        </div>
      </div>
    </form>
  );
}
