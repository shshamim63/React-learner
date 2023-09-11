import { customColor } from "../../style";

import { Avatar, Stack, Typography } from "@mui/material";

const WatchedMovieInfo = ({ watchedMovie }) => {
  const { poster, title, imdbRating, userRating, runtime } = watchedMovie;
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        background: customColor.amber.light,
        m: 0.2,
        borderRadius: 2,
        border: `1px solid ${customColor.orange.secondary}`,
      }}
      alignItems="stretch"
    >
      <Avatar
        src={poster}
        alt={`Poster of ${title}`}
        variant="square"
        sx={{ height: 85, width: 65 }}
      />
      <Stack spacing={2}>
        <Typography>{title}</Typography>
        <Stack direction="row" spacing={3}>
          <Typography>⭐️ {imdbRating}</Typography>
          <Typography>🌟 {userRating}</Typography>
          <Typography>⏳ {runtime}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default WatchedMovieInfo;
