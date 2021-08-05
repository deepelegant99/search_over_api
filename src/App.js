import "./App.css";
import SearchBar from "./components/SearchBar";
import DisplayList from "./components/DisplayList";
import React, { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const [names, setNames] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search.length > 0) {
      fetch(`https://api.jikan.moe/v3/search/manga?q=${search}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data.results);
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
