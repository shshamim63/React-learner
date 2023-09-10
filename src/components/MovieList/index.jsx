import { Stack } from "@mui/material";

import Movie from "../Movie";
const MovieList = ({ movies, handleSelectMovie }) => {
  return (
    <Stack
      sx={{
        mt: 1,
        height: "96%",
        overflow: "auto",
        width: "100%",
      }}
    >
      {movies.map((movie) => (
        <Movie
          movie={movie}
          key={movie.imdbID}
          handleSelectMovie={handleSelectMovie}
        ></Movie>
      ))}
    </Stack>
  );
};

export default MovieList;
