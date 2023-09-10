import { useState } from "react";

import { Box, Grid, IconButton, Paper } from "@mui/material";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { customColor } from "../../style";

const MovieListContainer = ({ children }) => {
  const [hideList, setHideList] = useState(false);

  const toggleHideList = () => {
    setHideList(!hideList);
  };

  return (
    <Grid item xs={10} sm={10} md={6}>
      <Paper sx={{ height: 700, background: customColor.blue.light }}>
        <IconButton
          aria-label="delete"
          size="small"
          onClick={toggleHideList}
          sx={{ display: "relative", float: "right" }}
        >
          {hideList && <AddCircleOutlineIcon fontSize="inherit" />}
          {!hideList && <RemoveCircleOutlineIcon fontSize="inherit" />}
        </IconButton>
        {!hideList && children}
      </Paper>
    </Grid>
  );
};

export default MovieListContainer;
