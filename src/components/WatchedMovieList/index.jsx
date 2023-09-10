import { useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import SelectedMovie from "../../components/SelectedMovie";
import Loader from "../Loader";

import { getMovieDetails } from "../../api/movie";

const WatchedMovieList = ({ moviesWatched, movieId, setSelectedMovieId }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) {
      setSelectedMovie(null);
      return;
    }
    const movieDetails = async () => {
      setIsLoading(true);
      const data = await getMovieDetails(movieId);
      setSelectedMovie(data);
      setIsLoading(false);
    };
    movieDetails();
  }, [movieId]);

  return (
    <Box sx={{ height: 700, width: "100%" }}>
      {isLoading && (
        <Box sx={{ position: "relative", top: 155 }}>
          <Loader></Loader>
        </Box>
      )}
      {!isLoading && selectedMovie && (
        <IconButton
          aria-label="remove-slected"
          sx={{ position: "absolute", left: 3 }}
          onClick={() => setSelectedMovieId(null)}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
      )}
      {!isLoading && selectedMovie && (
        <SelectedMovie selectedMovie={selectedMovie}></SelectedMovie>
      )}
    </Box>
  );
};

export default WatchedMovieList;
