import React, { useState } from "react";
import { TextField, FormControl, Button } from "@material-ui/core";

const SearchBar = ({setSearch}) => {
  const [searchValue, setSearchValue] = useState("");

  const searchHandler = (e) => {
    setSearchValue(e.target.value);
    
  };

  const submitHandler = (e)=>{
    setSearch(searchValue);
  }

  const displayClear = searchValue.length === 0;

  return (
    <>
      <FormControl>
        <TextField
          variant="filled"
          label="Search Anime"
          size="medium"
          onChange={searchHandler}
          value={searchValue}
        />
        {!displayClear && (
          <Button
            variant="contained"
            color="primary"
            onClick={() => setSearchValue("")}
          >
            Clear
          </Button>
        )}
        {!displayClear && (
          <Button
            variant="contained"
            color="secondary"
            onClick={submitHandler}
          >
            Enter
          </Button>
        )}
      </FormControl>
      <h1></h1>
    </>
  );
};

export default SearchBar;
