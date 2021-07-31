import "./App.css";
import SearchBar from "./components/SearchBar";
import DisplayList from "./components/DisplayList";
import React, { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetch("https://api.jikan.moe/v3/manga/2/characters")
      .then((response) => response.json())
      .then((data) => {
        setNames(data.characters);
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
