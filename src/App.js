import "./App.css";
import SearchBar from "./components/SearchBar";
import DisplayList from "./components/DisplayList";
import React, { useState } from "react";

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

  const [names, setNames]=useState([])

  fetch("https://api.jikan.moe/v3/manga/1/characters")
    .then((response) => response.json())
    .then((data) =>{
      setNames(data.characters.map((item)=>{
        return item.name
      }));
    });

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
