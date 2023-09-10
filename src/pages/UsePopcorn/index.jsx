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
import SelectedMovie from "../../components/SelectedMovie";

import { fetchMovies } from "../../api/movie";
import { customColor } from "../../style";

const UsePopcorn = () => {
  const [movies, setMovies] = useState([]);
  const [moviesWatched, setMoviesWatched] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

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
        flexGrow: 1,
        maxWidth: { sm: "sm", md: "md", lg: "lg" },
        margin: "auto",
        mt: 2,
      }}
    >
      <NavbarMovie>
        <SearchBar query={query} setQuery={setQuery} />
      </NavbarMovie>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <MovieListContainer>
            <>
              {isLoading && <Loader />}
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
            {selectedMovieId && (
              <SelectedMovie movieId={selectedMovieId}></SelectedMovie>
            )}
            {!selectedMovieId && (
              <WatchedMovieList moviesWatched={moviesWatched}>
                Watched Movie List
              </WatchedMovieList>
            )}
          </MovieListContainer>
        </Grid>
        <StarRating maxRating={10} size="small" defaultRating={6} />
      </Box>
    </Box>
  );
};

export default UsePopcorn;
