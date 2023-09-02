import { Stack, IconButton, Typography } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useState } from "react";
import { Height } from "@mui/icons-material";

const StarRating = ({ maxRating = 5, size = "small" }) => {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  const handleRating = (rating) => {
    setRating(rating);
  };

  const handleTempRating = (rating) => {
    setTempRating(rating);
  };

  return (
    <Stack direction="row">
      {Array.from({ length: maxRating }, (_, i) => {
        if (tempRating ? tempRating >= i + 1 : rating >= i + 1) {
          return (
            <IconButton
              aria-label="star"
              size={size}
              key={i}
              onClick={() => handleRating(i + 1)}
              onMouseEnter={() => handleTempRating(i + 1)}
              onMouseLeave={() => handleTempRating(0)}
            >
              <StarRateIcon />
            </IconButton>
          );
        } else {
          return (
            <IconButton
              size={size}
              aria-label="star"
              key={i}
              onClick={() => handleRating(i + 1)}
              onMouseEnter={() => handleTempRating(i + 1)}
              onMouseLeave={() => handleTempRating(0)}
            >
              <StarBorderIcon />
            </IconButton>
          );
        }
      })}
      <Typography
        variant="subtitle2"
        sx={{ height: "30px", lineHeight: 2.7, marginLeft: 1 }}
      >
        {tempRating ? tempRating : rating}
      </Typography>
    </Stack>
  );
};

export default StarRating;
