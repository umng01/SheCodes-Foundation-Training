import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results.js";
import Photos from "./Photos.js";


export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.default);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState([]);


  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
    let apiKey = "563492ad6f917000010000017c8fa8b751e64aa2928956fa0e83c53a";
    let pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=12`;
    let headers = { Authorization: `Bearer ${apiKey}` };
    axios
      .get(pexelApiUrl, { headers:  headers })
      .then(handlePexelResponse);
  }
  function handleSubmit(e) {
    e.preventDefault();
    search();
  }
  
  function handlePexelResponse(response) {
    setPhotos(response.data.photos);
  }
  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handleKeywordChange(e) {
    setKeyword(e.target.value);
    
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section className="title">Glossary by Umang</section>
        <form onSubmit={handleSubmit}>
          <section>
            <h1>What word do you want to look up?</h1>
            <input
              type="search"
              onChange={handleKeywordChange}
              className="search-input"
              defaultValue={props.default}
            />
            <p className="hint">
              Suggested Words: sunrise, books, water, programming...
            </p>
          </section>
        </form>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  }
  else {
    load();
  }
  
}
