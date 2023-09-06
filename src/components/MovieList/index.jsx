import { List } from "@mui/material";

import Movie from "../Movie";

const MovieList = ({ movies }) => {
  return (
    <List
      sx={{
        width: "95%",
        margin: "auto",
        height: "95%",
        position: "relative",
        overflow: "auto",
      }}
    >
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.imdbID}></Movie>
      ))}
    </List>
  );
};

export default MovieList;
