import { useState, useEffect } from "react";
import { useKey } from "../../hooks/useKey";

import { backButton } from "./style";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Button,
  Paper,
  IconButton,
  Typography,
  Stack,
  Avatar,
} from "@mui/material";

import StarRating from "../StarRating";
import Loader from "../Loader";
import { fetchMovieDetails } from "../../api/movie";
import { customColor } from "../../style";

const MovieDetail = ({
  movieId,
  setSelectedId,
  onAddWatched,
  moviesWatched,
  setSectionHeader,
}) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const isWatched = moviesWatched
    .map((movie) => movie.imdbId)
    .includes(movieId);

  const currentUserRating = moviesWatched.find(
    (movie) => movie.imdbId === movieId
  )?.userRating;

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  const handleDiscardDetail = () => {
    setSelectedId(null);
    setSectionHeader("UsePopcorn");
  };

  const handleAdd = () => {
    const newWatchedMovie = {
      imdbId: movieId,
      title,
      year,
      poster,
      userRating,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
    };
    onAddWatched(newWatchedMovie);
    setSelectedId(null);
    setSectionHeader("UsePopcorn");
  };

  const resetCurrentSelected = () => {
    setSelectedId(null);
  };

  useKey("Escape", resetCurrentSelected);

  useEffect(() => {
    const getMovieDetails = async () => {
      setIsLoading(true);
      const data = await fetchMovieDetails(movieId);
      setMovie(data);
      setIsLoading(false);
    };
    getMovieDetails();
  }, [movieId]);

  return (
    <Box sx={{ height: 700, width: "98%", margin: "auto" }}>
      {isLoading ? (
        <Box sx={{ position: "relative", top: 155 }}>
          <Loader></Loader>
        </Box>
      ) : (
        <>
          {Object.keys(movie).length > 0 && (
            <>
              <Paper elevation={2} sx={{ position: "relative", padding: 2 }}>
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ background: customColor.grey.primary }}
                >
                  <IconButton
                    aria-label="remove-slected"
                    sx={backButton}
                    onClick={handleDiscardDetail}
                  >
                    <ArrowBackIosNewIcon sx={{ fontSize: 15 }} />
                  </IconButton>
                  <Avatar
                    src={poster}
                    alt={`Poster of ${movie} movie`}
                    sx={{ width: 150, height: 200 }}
                    variant="square"
                  />
                  <Stack
                    spacing={2}
                    sx={{ background: customColor.grey.primary }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontFamily: "monoscope",
                        color: customColor.indigo.secondary,
                        fontWeight: "bold",
                      }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ fontFamily: "monoscope" }}
                    >
                      {released} - {runtime}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ fontFamily: "monoscope" }}
                    >
                      {genre}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ fontFamily: "monoscope" }}
                    >
                      ⭐️ {imdbRating} IMDB rating
                    </Typography>
                  </Stack>
                </Stack>
              </Paper>
              <Box
                sx={{
                  marginTop: 1,
                  minHeight: 460,
                  background: customColor.grey.light,
                  paddingTop: 5,
                }}
              >
                <Box
                  sx={{
                    margin: 2,
                    background: customColor.grey.secondary,
                    borderRadius: 2,
                    height: 100,
                  }}
                >
                  <Stack>
                    {!isWatched ? (
                      <>
                        <StarRating
                          maxRating={10}
                          onSetRating={setUserRating}
                        />
                        {userRating > 0 && (
                          <Button
                            variant="outlined"
                            sx={{
                              background: customColor.deepPurple.fade,
                              width: "50%",
                              margin: "auto",
                              marginTop: 2,
                              color: "white",
                              "&:hover": {
                                background: customColor.blue.fade,
                              },
                            }}
                            startIcon={<AddIcon />}
                            onClick={handleAdd}
                          >
                            Add to list
                          </Button>
                        )}
                      </>
                    ) : (
                      <Typography
                        variant="overline"
                        textAlign="center"
                        lineHeight={8}
                      >
                        You have already rated this movie with{" "}
                        {currentUserRating}
                      </Typography>
                    )}
                  </Stack>
                </Box>
                <Stack
                  sx={{
                    width: "95%",
                    margin: "auto",
                    padding: 2,
                    background: customColor.grey.fade,
                    color: "white",
                    fontWeight: 800,
                    borderRadius: 2,
                  }}
                  spacing={2}
                >
                  <Typography variant="body2" display="block" gutterBottom>
                    {plot}
                  </Typography>
                  <Typography variant="caption" display="block">
                    Starring {actors}
                  </Typography>
                  <Typography variant="caption" display="block">
                    Directed By {director}
                  </Typography>
                </Stack>
              </Box>
            </>
          )}
        </>
      )}
    </Box>
  );
};

export default MovieDetail;
