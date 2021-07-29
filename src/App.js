import "./App.css";
import SearchBar from "./components/SearchBar";
import DisplayList from "./components/DisplayList";
import React, { useEffect, useState } from "react";

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

// image_url: "https://cdn.myanimelist.net/images/characters/11/286916.jpg?s=ff0b6e37a427c9498f5a1ecd40bf7bb4";
// mal_id: 720;
// name: "Liebert, Anna";
// role: "Main";
// url: "https://myanimelist.net/character/720/Anna_Liebert";

  const [names, setNames] = useState([]);

  useEffect(() => {
    fetch("https://api.jikan.moe/v3/manga/1/characters")
      .then((response) => response.json())
      .then((data) => {
        setNames(data.characters.map(
          (dic)=>{
            return <div>`name: ${dic.name} role: ${dic.role} image_url: 
            ${dic.image_url} url: ${dic.url} `</div>
          }
        ))
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
