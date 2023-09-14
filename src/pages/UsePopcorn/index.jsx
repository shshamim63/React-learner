import { useEffect, useState } from "react";

import { Grid, Box } from "@mui/material";

import NavbarMovie from "../../components/NavbarMovie";
import SectionContainer from "../../components/SectionContainer";
import MovieList from "../../components/MovieList";
import WatchedMovieList from "../../components/WatchedMovieList";
import WatchedSummary from "../../components/WatchedSummary";
import SearchBar from "../../components/SearchBar";
import BasicError from "../../components/BasicError";
import Loader from "../../components/Loader";
import MovieDetail from "../../components/MovieDetail";

import { customColor } from "../../style";
import { useMovies } from "../../hooks/useMovies";
import { useLocalStorageState } from "../../hooks/useLocalStorageState";

const UsePopcorn = ({ title }) => {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [sectionHeader, setSectionHeader] = useState("UsePopcorn");

  const resetSelected = () => {
    setSectionHeader("UsePopcorn");
    setSelectedId(null);
  };

  const { movies, isLoading, error } = useMovies(query, resetSelected);

  const [watched, setWatched] = useLocalStorageState([], "watched");

  const handleAddWatchedMovie = (movie) => {
    setWatched([...watched, movie]);
  };

  const handleRemoveMovie = (movieId) => {
    const updatedMovies = watched.filter((movie) => movie.imdbId !== movieId);
    setWatched(updatedMovies);
  };

  useEffect(() => {
    document.title = title;
  }, [title]);

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
              {error && <BasicError message={error} />}
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
                moviesWatched={watched}
              />
            ) : (
              <Box sx={{ height: 700, width: "98%", margin: "auto" }}>
                {watched.length > 0 ? (
                  <>
                    <WatchedSummary watched={watched} />
                    <WatchedMovieList
                      watched={watched}
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
