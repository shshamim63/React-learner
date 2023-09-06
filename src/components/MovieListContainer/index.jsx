import { useState } from "react";

import { Grid, IconButton } from "@mui/material";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { customColor } from "../../style";

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
      sx={{
        mt: { xs: 1 },
        borderRadius: 2,
        width: "100%",
        height: "700px",
        mb: 2,
        background: customColor.indigo.light,
      }}
    >
      <IconButton
        aria-label="delete"
        size="small"
        sx={{ position: "relative", float: "right", zIndex: 10, mr: 1, mt: 1 }}
        onClick={toggleHideList}
      >
        {hideList && <AddCircleOutlineIcon fontSize="inherit" />}
        {!hideList && <RemoveCircleOutlineIcon fontSize="inherit" />}
      </IconButton>
      {!hideList && children}
    </Grid>
  );
};

export default MovieListContainer;
