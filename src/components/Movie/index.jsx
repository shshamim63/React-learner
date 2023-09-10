import { Stack, Typography } from "@mui/material";
import { customColor } from "../../style";

const Movie = ({ movie, handleSelectMovie }) => {
  const handleSelect = () => {
    handleSelectMovie(movie.imdbID);
  };

  return (
    <Stack
      direction="row"
      spacing={2}
      onClick={handleSelect}
      sx={{
        background: customColor.grey.secondary,
        m: 1,
      }}
    >
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "./no-image.avif"}
        alt={movie.Title}
        style={{ height: "100px", width: "60px" }}
      />
      <Stack spacing={0.5}>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { md: 15, sm: 12 },
          }}
          variant="subtitle1"
        >
          {movie.Title}
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 400,
            color: customColor.grey.primary,
            fontSize: { md: 12, sm: 10 },
          }}
        >{`⏳ ${movie.Year}`}</Typography>
      </Stack>
    </Stack>
  );
};

export default Movie;
