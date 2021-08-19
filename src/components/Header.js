import "../App.css"
import SearchBar from "./SearchBar";
import React, { useEffect, useState } from "react";


const Header = ()=>{

    const [names, setNames] = useState([]);
    const [search, setSearch] = useState("");

    return(

    <div>
        <div className="ah1">
        <hl>Anime Character Search</hl>
        </div>
        <div className="ah2">
            <br/>
            
         
            </div>
    </div>

);

    }

export default Header;