import { useEffect, useState } from "react";

import { Grid, Box } from "@mui/material";

import NavbarMovie from "../../components/NavbarMovie";
import MovieListContainer from "../../components/MovieListContainer";
import StarRating from "../../components/StarRating";
import MovieList from "../../components/MovieList";
import WatchedMovieList from "../../components/WatchedMovieList";
import SearchBar from "../../components/SearchBar";

import { fetchMovies } from "../../api/movie";

const UsePopcorn = () => {
  const [movies, setMovies] = useState([]);
  const [moviesWatched, setMoviesWatched] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getMovies = async () => {
      const searchResult = await fetchMovies("hello");
      setMovies(searchResult);
    };
    getMovies();
  }, []);

  return (
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: { sm: "sm", md: "md", lg: "lg" },
        margin: "auto",
        mt: 2,
      }}
    >
      <NavbarMovie>
        <SearchBar query={query} setQuery={setQuery} />
      </NavbarMovie>
      <Grid
        container
        direction={{ xs: "column", sm: "column", md: "row" }}
        justifyContent="space-around"
        minHeight={700}
        maxHeight={700}
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
