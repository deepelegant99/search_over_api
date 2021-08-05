import "./App.css";
import SearchBar from "./components/SearchBar";
import DisplayList from "./components/DisplayList";
import React, { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const [names, setNames] = useState([]);
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   fetch("https://api.jikan.moe/v3/manga/2/characters")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setNames(data.characters);
  //     });
  // }, []);

  useEffect(() => {
    if (search.length > 0) {
      fetch(`https://api.jikan.moe/v3/search/manga?q=${search}`)
        .then((response) => response.json())
        .then((data) => {
          const manga_id = data.results[0].mal_id;
          fetch(`https://api.jikan.moe/v3/manga/${manga_id}/characters`)
            .then((response) => response.json())
            .then((data) => {
              setNames(data.characters);
            });
        });
    }
  }, [search]);

  return (
    <div className="App">
      <>
        <SearchBar setSearch={setSearch} />
        <DisplayList list={names} />
      </>
    </div>
  );
}

export default App;
