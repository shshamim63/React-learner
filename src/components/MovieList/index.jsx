import { Stack } from "@mui/material";

import Movie from "../Movie";

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
