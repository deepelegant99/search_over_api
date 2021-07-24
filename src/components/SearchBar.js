import React, { useState } from "react";
import { TextField, FormControl, Button } from "@material-ui/core";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  const searchHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const displayClear = searchValue.length === 0;

  return (
    <>
      <FormControl>
        <TextField
          variant="filled"
          label="Search Events"
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
      </FormControl>
      <h1>{searchValue}</h1>
    </>
  );
};

export default SearchBar;
