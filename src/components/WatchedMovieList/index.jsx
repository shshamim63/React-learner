import { Box } from "@mui/material";

import MovieDetail from "../MovieDetail";
import Loader from "../Loader";
import { useState } from "react";

const WatchedMovieList = ({ moviesWatched, movieId }) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Box sx={{ height: 700, width: "98%", margin: "auto" }}>
      {isLoading && (
        <Box sx={{ position: "relative", top: 155 }}>
          <Loader></Loader>
        </Box>
      )}
      <MovieDetail movieId={movieId} setIsLoading={setIsLoading}></MovieDetail>
    </Box>
  );
};

export default WatchedMovieList;
