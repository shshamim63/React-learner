import { useEffect, useState } from "react";

import { Grid, Box } from "@mui/material";

import NavbarMovie from "../../components/NavbarMovie";
import MovieListContainer from "../../components/MovieListContainer";
import StarRating from "../../components/StarRating";
import MovieList from "../../components/MovieList";
import WatchedMovieList from "../../components/WatchedMovieList";
import SearchBar from "../../components/SearchBar";
import MovieError from "../../components/MovieError";
import Loader from "../../components/Loader";

import { fetchMovies } from "../../api/movie";

const UsePopcorn = () => {
  const [movies, setMovies] = useState([]);
  const [moviesWatched, setMoviesWatched] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsLoading(true);
        const searchResult = await fetchMovies("hello");
        if (!searchResult.length) throw new Error("Movie Not found");
        setMovies(searchResult);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
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
          <>
            {isLoading && <Loader />}
            {error && <MovieError message={error} />}
            {!isLoading && !error && (
              <MovieList movies={movies}>Movie List</MovieList>
            )}
          </>
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
