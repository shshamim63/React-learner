import { Stack, IconButton, Typography } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useState } from "react";
import { customColor } from "../../style";

const StarRating = ({
  maxRating = 5,
  defaultRating = 0,
  size = "small",
  onSetRating,
}) => {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  const handleRating = (rating) => {
    onSetRating(rating);
    setRating(rating);
  };

  const handleTempRating = (rating) => {
    setTempRating(rating);
  };

  return (
    <Stack direction="row" justifyContent="space-between">
      {Array.from({ length: maxRating }, (_, i) => {
        if (tempRating ? tempRating >= i + 1 : rating >= i + 1) {
          return (
            <IconButton
              aria-label="star"
              size={size}
              key={i}
              sx={{ color: customColor.yellow.deep }}
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
              sx={{ color: customColor.yellow.deep }}
            >
              <StarBorderIcon />
            </IconButton>
          );
        }
      })}
      <Typography
        variant="subtitle2"
        sx={{
          fontFamily: "monoscope",
          height: "30px",
          width: "30px",
          lineHeight: 2.7,
          marginLeft: 1,
          fontWeight: "bold",
        }}
      >
        {tempRating ? tempRating : rating}
      </Typography>
    </Stack>
  );
};

export default StarRating;
