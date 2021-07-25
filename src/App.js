import "./App.css";
import SearchBar from "./components/SearchBar";
import DisplayList from "./components/DisplayList";
import React, { useS } from "react";

function App() {
  const topJobs = [
    "Jave Developer",
    "Data Scientist",
    "Product Manager",
    "Enterprise Architech",
    "Devops Engineer",
    "Information Security Engineer",
    "Business Development Manager",
    "Mobile Engineer",
    "Software Engineer",
    "Dentist",
    "Front End Engineer",
  ];

  let list = [];

  fetch("https://api.jikan.moe/v3/manga/1/characters")
    .then((response) => response.json())
    .then((data) => {
      console.log(data["characters"]);
    });

  return (
    <div className="App">
      <header>
        <SearchBar />
        <DisplayList list={list} />
      </header>
    </div>
  );
}

export default App;
