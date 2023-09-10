import { useEffect, useState } from "react";

import { Grid, Box } from "@mui/material";

import NavbarMovie from "../../components/NavbarMovie";
import MovieListContainer from "../../components/MovieListContainer";
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
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const handleOnUpdateWatchedMovieList = (movie) => {
    setMoviesWatched([...moviesWatched, movie]);
  };

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsLoading(true);
        const searchResult = await fetchMovies(query);
        if (!searchResult.length) throw new Error("Movie Not found");
        setMovies(searchResult);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    getMovies();
  }, [query]);

  return (
    <Box
      sx={{
        maxWidth: { sm: "sm", md: "md", lg: "lg" },
        margin: "auto",
        mt: 2,
      }}
    >
      <NavbarMovie>
        <SearchBar query={query} setQuery={setQuery} />
      </NavbarMovie>
      <Box sx={{ width: "100%" }}>
        <Grid container justifyContent="space-evenly">
          <MovieListContainer>
            <>
              {isLoading && (
                <Box sx={{ position: "relative", top: 155 }}>
                  <Loader></Loader>
                </Box>
              )}
              {error && <MovieError message={error} />}
              {!isLoading && !error && (
                <MovieList
                  movies={movies}
                  handleSelectMovie={setSelectedMovieId}
                >
                  Movie List
                </MovieList>
              )}
            </>
          </MovieListContainer>
          <MovieListContainer>
            <WatchedMovieList
              moviesWatched={moviesWatched}
              movieId={selectedMovieId}
              handleOnUpdateWatchedMovieList={handleOnUpdateWatchedMovieList}
              setSelectedMovieId={setSelectedMovieId}
            />
          </MovieListContainer>
        </Grid>
      </Box>
    </Box>
  );
};

export default UsePopcorn;
