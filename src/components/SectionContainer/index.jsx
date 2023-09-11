import { useState } from "react";

import { Grid, IconButton } from "@mui/material";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { customColor } from "../../style";

const SectionContainer = ({ children }) => {
  const [hideList, setHideList] = useState(false);

  const toggleHideList = () => {
    setHideList(!hideList);
  };

  return (
    <Grid
      item
      xs={10}
      sm={10}
      md={5.85}
      sx={{
        minHeight: 700,
        maxHeight: 700,
        width: "100%",
        background: customColor.grey.fade,
        position: "relative",
      }}
    >
      <IconButton
        aria-label="delete"
        size="small"
        onClick={toggleHideList}
        sx={{
          position: "absolute",
          right: 0,
          top: 0,
          zIndex: 100,
          background: customColor.amber.deep,
          "&:hover": {
            background: customColor.amber.light,
          },
        }}
      >
        {hideList && <AddCircleOutlineIcon fontSize="inherit" />}
        {!hideList && <RemoveCircleOutlineIcon fontSize="inherit" />}
      </IconButton>
      {!hideList && children}
    </Grid>
  );
};

export default SectionContainer;
