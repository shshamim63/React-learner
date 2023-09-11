import { useState, useEffect } from "react";
import { backButton } from "./style";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {
  Box,
  Paper,
  IconButton,
  Typography,
  Stack,
  Avatar,
} from "@mui/material";

import StarRating from "../StarRating";

import { fetchMovieDetails } from "../../api/movie";
import { customColor } from "../../style";

const MovieDetail = ({ movieId, setIsLoading }) => {
  const [movie, setMovie] = useState({});
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

  useEffect(() => {
    const getMovieDetails = async () => {
      const data = await fetchMovieDetails(movieId);
      setMovie(data);
    };
    getMovieDetails();
  }, [movieId]);

  return (
    <Box>
      <Paper elevation={2} sx={{ position: "relative", padding: 2 }}>
        <Stack
          direction="row"
          spacing={1}
          sx={{ background: customColor.grey.primary }}
        >
          <IconButton aria-label="remove-slected" sx={backButton}>
            <ArrowBackIosNewIcon sx={{ fontSize: 15 }} />
          </IconButton>
          <Avatar
            src={poster}
            alt={`Poster of ${movie} movie`}
            sx={{ width: 150, height: 200 }}
            variant="square"
          />
          <Stack spacing={2} sx={{ background: customColor.grey.primary }}>
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
            <Typography variant="body2" sx={{ fontFamily: "monoscope" }}>
              {released} - {runtime}
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: "monoscope" }}>
              {genre}
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: "monoscope" }}>
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
            background: customColor.blue.light,
            borderRadius: 2,
          }}
        >
          <StarRating maxRating={10} />
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
            Starring{actors}
          </Typography>
          <Typography variant="caption" display="block">
            Directed By {director}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default MovieDetail;
