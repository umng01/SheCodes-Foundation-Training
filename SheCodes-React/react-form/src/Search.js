import React, { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    if (query.length > 0) {
      alert(query);
    } else {
      alert("Enter a city");
    }
  }

  function updateQuery(event) {
    setQuery(event.target.value);
  }

  return (
    <form onSubmit={handleSearch}>
      <input type="search" placeholder="Type a query" onChange={updateQuery} />
      <input type="submit" value="Search" />
    </form>
  );
}
