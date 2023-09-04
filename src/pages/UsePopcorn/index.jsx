import { useState } from "react";

import { Grid, Box } from "@mui/material";

import NavbarMovie from "../../components/NavbarMovie";
import MovieListContainer from "../../components/MovieListContainer";
import StarRating from "../../components/StarRating";
import MovieList from "../../components/MovieList";
import WatchedMovieList from "../../components/WatchedMovieList";

const moviesList = [
  {
    name: "Interesteller",
    year: 201,
    rating: 8.8,
    userRating: 0,
    image:
      "https://media.npr.org/assets/img/2014/11/13/fl-17895r_wide-d745edc663a75ddc961f66684631a621dc148566.jpg",
  },
  {
    name: "Interesteller",
    year: 201,
    rating: 8.8,
    userRating: 0,
    image:
      "https://media.npr.org/assets/img/2014/11/13/fl-17895r_wide-d745edc663a75ddc961f66684631a621dc148566.jpg",
  },
  {
    name: "Interesteller",
    year: 201,
    rating: 8.8,
    userRating: 0,
    image:
      "https://media.npr.org/assets/img/2014/11/13/fl-17895r_wide-d745edc663a75ddc961f66684631a621dc148566.jpg",
  },
  {
    name: "Interesteller",
    year: 201,
    rating: 8.8,
    userRating: 0,
    image:
      "https://media.npr.org/assets/img/2014/11/13/fl-17895r_wide-d745edc663a75ddc961f66684631a621dc148566.jpg",
  },
];

const UsePopcorn = () => {
  const [movies, setMovies] = useState(moviesList);
  const [moviesWatched, setMoviesWatched] = useState([]);
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
        <MovieListContainer>
          <MovieList movies={movies}>Movie List</MovieList>
        </MovieListContainer>
        <MovieListContainer>
          <WatchedMovieList moviesWatched={moviesWatched}>
            Watched Movie List
          </WatchedMovieList>
        </MovieListContainer>
      </Grid>
      <StarRating maxRating={10} size="small" defaultRating={6} />
    </Box>
  );
};

export default UsePopcorn;
