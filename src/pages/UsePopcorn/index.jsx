import { Grid, Box, Typography } from "@mui/material";

import NavbarMovie from "../../components/NavbarMovie";
import MovieList from "../../components/MovieList";
import StarRating from "../../components/StarRating";

const UsePopcorn = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: { sm: "sm", md: "md", lg: "lg" },
        margin: "auto",
        mt: 2,
      }}
    >
      <NavbarMovie />
      <Grid
        container
        direction={{ xs: "column", sm: "column", md: "row" }}
        sx={{ height: { md: "80vh", lg: "80vh" } }}
        justifyContent="space-around"
      >
        <MovieList>
          <Typography>Movie List</Typography>
        </MovieList>
        <MovieList>
          <Typography>Watched Movie List</Typography>
        </MovieList>
      </Grid>
      <StarRating maxRating={10} size="small" />
    </Box>
  );
};

export default UsePopcorn;
