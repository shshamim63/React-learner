import { useEffect, useState } from "react";

import { Grid, Box } from "@mui/material";

import NavbarMovie from "../../components/NavbarMovie";
import SectionContainer from "../../components/SectionContainer";
import MovieList from "../../components/MovieList";
import WatchedMovieList from "../../components/WatchedMovieList";
import WatchedSummary from "../../components/WatchedSummary";
import SearchBar from "../../components/SearchBar";
import MovieError from "../../components/MovieError";
import Loader from "../../components/Loader";
import MovieDetail from "../../components/MovieDetail";
import { fetchMovies } from "../../api/movie";
import { customColor } from "../../style";

const UsePopcorn = ({ title }) => {
  const [movies, setMovies] = useState([]);
  const [moviesWatched, setMoviesWatched] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [sectionHeader, setSectionHeader] = useState("UsePopcorn");

  const handleAddWatchedMovie = (movie) => {
    setMoviesWatched([...moviesWatched, movie]);
  };

  const handleRemoveMovie = (movieId) => {
    const updatedMovies = moviesWatched.filter(
      (movie) => movie.imdbId !== movieId
    );
    setMoviesWatched(updatedMovies);
  };

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    const controller = new AbortController();
    const getMovies = async () => {
      try {
        setIsLoading(true);
        const searchResult = await fetchMovies(query, {
          signal: controller.signal,
        });
        if (!searchResult.length) throw new Error("Movie Not found");
        setMovies(searchResult);
        setError("");
      } catch (error) {
        if (error.message !== "AbortError") {
          setError(error.message);
        }
      }
      setIsLoading(false);
    };

    setSectionHeader("UsePopcorn");
    setSelectedId(null);

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }
    getMovies();

    return () => {
      controller.abort();
    };
  }, [query]);

  return (
    <Box
      sx={{
        maxWidth: { sm: "sm", md: "md", lg: "lg" },
        margin: "auto",
        mt: 2,
      }}
    >
      <NavbarMovie sectionTitle={sectionHeader}>
        <SearchBar query={query} setQuery={setQuery} />
      </NavbarMovie>
      <Box sx={{ width: "100%" }}>
        <Grid container justifyContent="space-evenly">
          <SectionContainer>
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
                  handleSelectMovie={setSelectedId}
                  setSectionHeader={setSectionHeader}
                >
                  Movie List
                </MovieList>
              )}
            </>
          </SectionContainer>
          <SectionContainer>
            {selectedId ? (
              <MovieDetail
                movieId={selectedId}
                setSelectedId={setSelectedId}
                setSectionHeader={setSectionHeader}
                onAddWatched={handleAddWatchedMovie}
                moviesWatched={moviesWatched}
              />
            ) : (
              <Box sx={{ height: 700, width: "98%", margin: "auto" }}>
                {moviesWatched.length > 0 ? (
                  <>
                    <WatchedSummary watched={moviesWatched} />
                    <WatchedMovieList
                      watched={moviesWatched}
                      onHandleRemoveMovie={handleRemoveMovie}
                    />
                  </>
                ) : (
                  <Box
                    sx={{
                      background: customColor.amber.light,
                      height: 100,
                      width: "80%",
                      margin: "auto",
                      borderRadius: 3,
                      textAlign: "center",
                      lineHeight: 3,
                    }}
                  >
                    We have awesome movies, lets add them to your list
                  </Box>
                )}
              </Box>
            )}
          </SectionContainer>
        </Grid>
      </Box>
    </Box>
  );
};

export default UsePopcorn;
