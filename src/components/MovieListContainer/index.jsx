import { Grid, IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { customColor } from "../../style";
import { useState } from "react";

const MovieListContainer = ({ children }) => {
  const [hideList, setHideList] = useState(false);

  const toggleHideList = () => {
    setHideList(!hideList);
  };

  return (
    <Grid
      item
      md={5}
      lg={5}
      xl={5.6}
      sx={{ background: customColor.amber.deep, mt: { xs: 1 } }}
    >
      <IconButton
        aria-label="delete"
        size="small"
        sx={{ position: "relative", float: "right" }}
        onClick={toggleHideList}
      >
        {!hideList && <AddCircleOutlineIcon fontSize="inherit" />}
        {hideList && <RemoveCircleOutlineIcon fontSize="inherit" />}
      </IconButton>
      {hideList && children}
    </Grid>
  );
};

export default MovieListContainer;
