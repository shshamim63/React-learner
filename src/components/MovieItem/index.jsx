import { Stack, Typography } from "@mui/material";
import { customColor } from "../../style";

const MovieItem = ({ movie, handleSelectMovie, setSectionHeader }) => {
  const handleSelect = () => {
    handleSelectMovie(movie.imdbID);
    setSectionHeader(movie.Title);
  };

  return (
    <Stack
      direction="row"
      spacing={2}
      onClick={handleSelect}
      sx={{
        background: customColor.amber.light,
        m: 0.2,
        borderRadius: 2,
        border: `1px solid ${customColor.orange.secondary}`,
      }}
      alignItems="stretch"
    >
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "./no-image.avif"}
        alt={movie.Title}
        style={{ height: "100px", width: "65px" }}
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

export default MovieItem;
