import { Box, Stack } from "@mui/material";

import WatchedMovieInfo from "../WatchMovieInfo";
import { customColor } from "../../style";

const WatchedMovieList = ({ watched }) => {
  return (
    <Box
      sx={{
        height: "83%",
        width: "95%",
        margin: "auto",
        overflow: "auto",
        marginTop: 1,
        padding: 1,
        background: customColor.grey.fade,
      }}
    >
      {watched.length > 0 && (
        <Stack>
          {watched.map((movie) => (
            <WatchedMovieInfo watchedMovie={movie} key={movie.imdbId} />
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default WatchedMovieList;
