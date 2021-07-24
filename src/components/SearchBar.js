import React, { useState } from "react";
import {
  TextField,
  FormControl,
  FormHelperText,
  Button,
} from "@material-ui/core";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  const searchHandler = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <FormControl>
        <TextField variant="filled" size="medium" onChange={searchHandler} />
        <FormHelperText>Search for New Classes</FormHelperText>
        <Button variant="contained" color="primary">
          Clear
        </Button>
      </FormControl>
      <h1>{searchValue}</h1>
    </>
  );
};

export default SearchBar;
