import "./App.css";
import SearchBar from "./components/SearchBar";
import DisplayList from "./components/DisplayList";
import React, { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const [names, setNames] = useState([]);

  /* https://jikan.docs.apiary.io/#reference/0/search/meta-request-example+schema */

  /*useEffect(() => {
    fetch("https://api.jikan.moe/v3/manga/2/characters")
      .then((response) => response.json())
      .then((data) => {
        setNames(data.characters);
      });
  }, []);*/

  useEffect(() => {
    fetch("https://api.jikan.moe/v3/search/anime?q=Dragon%Ball")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
      });
  }, []);

  return (
    <div className="App">
      <header>
        <SearchBar />
        <DisplayList list={names} />
      </header>
    </div>
  );
}

export default App;
