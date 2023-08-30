import { Grid } from "@mui/material";
import { customColor } from "../../style";

const MovieList = ({ children }) => {
  return (
    <Grid
      item
      md={5}
      lg={5}
      xl={5.6}
      sx={{ background: customColor.amber.deep, mt: { xs: 1 } }}
    >
      {children}
    </Grid>
  );
};

export default MovieList;
