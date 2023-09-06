import { List } from "@mui/material";

import Movie from "../Movie";

const MovieList = ({ movies }) => {
  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        height: 663.5,
        position: "relative",
        overflow: "auto",
      }}
    >
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.Title}></Movie>
      ))}
    </List>
  );
};

export default MovieList;
