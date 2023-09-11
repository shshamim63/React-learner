import { customColor } from "../../style";

import { Avatar, Stack, Typography, IconButton } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
const WatchedMovieInfo = ({ watchedMovie, onHandleRemoveMovie }) => {
  const { poster, title, imdbRating, userRating, runtime, imdbId } =
    watchedMovie;

  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        background: customColor.amber.light,
        m: 0.2,
        borderRadius: 2,
        border: `1px solid ${customColor.orange.secondary}`,
        position: "relative",
      }}
      alignItems="stretch"
    >
      <Stack direction="row" sx={{ width: "80%" }} spacing={1.5}>
        <Avatar
          src={poster}
          alt={`Poster of ${title}`}
          variant="square"
          sx={{ height: 85, width: 65 }}
        />
        <Stack spacing={2}>
          <Typography>{title}</Typography>
          <Stack direction="row" spacing={3}>
            <Typography variant="caption">⭐️ {imdbRating}</Typography>
            <Typography variant="caption">🌟 {userRating}</Typography>
            <Typography variant="caption">⏳ {runtime} mins</Typography>
          </Stack>
        </Stack>
      </Stack>
      <IconButton
        aria-label="remove-movie"
        sx={{
          color: customColor.red.deep,
          height: 20,
          width: 20,
          position: "absolute",
          top: 28,
          right: 15,
        }}
        onClick={() => onHandleRemoveMovie(imdbId)}
      >
        <HighlightOffIcon />
      </IconButton>
    </Stack>
  );
};

export default WatchedMovieInfo;
