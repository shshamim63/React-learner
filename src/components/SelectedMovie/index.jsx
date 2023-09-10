import {
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Stack,
  Paper,
} from "@mui/material";
import { useEffect, useState } from "react";

import { getMovieDetails } from "../../api/movie";
import { customColor } from "../../style";
import Loader from "../Loader";

const SelectedMovie = ({ movieId }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    const movieDetails = async () => {
      setIsLoading(true);
      const data = await getMovieDetails(movieId);
      setSelectedMovie(data);
      setIsLoading(false);
    };
    movieDetails();
  }, [movieId]);

  return (
    <>
      {isLoading && (
        <Paper>
          <Loader></Loader>
        </Paper>
      )}
      {!isLoading && selectedMovie && (
        <Card sx={{ display: "flex", mt: 3, minWidth: "100%" }}>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={selectedMovie.Poster}
            alt="Live from space album cover"
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, fontFamily: "monoscope" }}
              >
                {selectedMovie.Title}
              </Typography>
              <Stack>
                <Typography
                  variant="body"
                  sx={{
                    color: customColor.grey.primary,
                    fontWeight: 600,
                    fontSize: "11px",
                    fontFamily: "Roboto",
                  }}
                >
                  {`${selectedMovie.DVD} - ${selectedMovie.Runtime}`}
                </Typography>
                <Typography
                  variant="body"
                  sx={{
                    color: customColor.grey.primary,
                    fontWeight: 600,
                    fontSize: "11px",
                    fontFamily: "Roboto",
                  }}
                >
                  {selectedMovie.Genre}
                </Typography>
              </Stack>
            </CardContent>
          </Box>
        </Card>
      )}
    </>
  );
};

export default SelectedMovie;
