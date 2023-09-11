import { Stack } from "@mui/material";

import MovieItem from "../MovieItem";

const MovieList = ({ movies, handleSelectMovie }) => {
  return (
    <Stack
      sx={{
        height: "95%",
        width: "95%",
        margin: "auto",
        overflow: "auto",
        marginTop: 3.5,
        padding: 1,
      }}
    >
      {movies.map((movie) => (
        <MovieItem
          movie={movie}
          key={movie.imdbID}
          handleSelectMovie={handleSelectMovie}
        />
      ))}
    </Stack>
  );
};

export default MovieList;
