import { Paper, Stack, Typography } from "@mui/material";

import { average } from "../../helper/math";
import { customColor } from "../../style";

const WatchedSummary = ({ watched }) => {
  const numberOfWatchedMovies = watched.length;

  const imdbAverageRating = average(
    watched.map((movie) => movie.imdbRating)
  ).toFixed(2);

  const userAverageRating = average(
    watched.map((movie) => movie.userRating)
  ).toFixed(2);

  const averageWatched = average(watched.map((movie) => movie.runtime)).toFixed(
    2
  );

  return (
    <Paper
      elevation={2}
      sx={{
        height: 100,
        padding: 3,
        background: customColor.grey.primary,
        color: "white",
      }}
    >
      <Stack>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          MOVIES YOU WATCHED
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row", md: "row" }}
          justifyContent="space-between"
          sx={{ marginTop: 2 }}
        >
          <Typography variant="caption" textAlign="center">
            🎥 {numberOfWatchedMovies} movies
          </Typography>
          <Typography variant="caption" textAlign="center">
            ⭐️ {imdbAverageRating}
          </Typography>
          <Typography variant="caption" textAlign="center">
            🌟 {userAverageRating}
          </Typography>
          <Typography variant="caption" textAlign="center">
            ⏳ {averageWatched}
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default WatchedSummary;
