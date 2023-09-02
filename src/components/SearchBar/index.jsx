import { InputBase, IconButton, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const handleOnChange = () => {
    console.log("I am chaning");
  };

  return (
    <Stack direction="row">
      <InputBase
        sx={{ ml: 1, width: { xs: 130, sm: 150 } }}
        placeholder="Search Movies"
        inputProps={{ "aria-label": "search google maps" }}
        onChange={handleOnChange}
      />
      <IconButton type="button" aria-label="search">
        <SearchIcon />
      </IconButton>
    </Stack>
  );
};

export default SearchBar;