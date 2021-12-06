import React from "react";

export default function Weather() {
  function handleClick() {
    alert("Coming soon...");
  }

  return (
    <div className="Weather">
      <button onClick={handleClick}>Current Temperature</button>
    </div>
  );
}
