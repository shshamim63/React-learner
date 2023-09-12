import { useEffect, useRef } from "react";

import { InputBase, IconButton, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ query, setQuery }) => {
  const inputEl = useRef(null);

  useEffect(() => {
    const callback = (e) => {
      if (document.activeElement === inputEl.current) return;
      if (e.code === "Enter") {
        inputEl.current.focus();
        setQuery("");
      }
    };

    document.addEventListener("keydown", callback);

    return () => document.removeEventListener("keydown", callback);
  }, [setQuery]);

  const handleOnChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Stack direction="row">
      <InputBase
        sx={{ ml: 1, width: { xs: 130, sm: 150 } }}
        placeholder="Search Movies"
        inputProps={{ "aria-label": "search google maps" }}
        onChange={handleOnChange}
        inputRef={inputEl}
        value={query}
      />
      <IconButton type="button" aria-label="search">
        <SearchIcon />
      </IconButton>
    </Stack>
  );
};

export default SearchBar;
