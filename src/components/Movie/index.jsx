import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { customColor } from "../../style";

const Movie = ({ movie }) => {
  return (
    <ListItem
      sx={{ background: customColor.grey.secondary, mt: 0.5, padding: 1 }}
    >
      <ListItemAvatar>
        <img
          style={{ height: "60px", width: "40px" }}
          src={movie.Poster !== "N/A" ? movie.Poster : "./no-image.avif"}
          alt={movie.Title}
          loading="lazy"
        />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography
            sx={{ fontWeight: 700, color: customColor.deepPurple.deep }}
            variant="subtitle1"
          >
            {movie.Title}
          </Typography>
        }
        secondary={
          <Typography variant="subtitle2">{`⏳ ${movie.Year}`}</Typography>
        }
      />
    </ListItem>
  );
};

export default Movie;
