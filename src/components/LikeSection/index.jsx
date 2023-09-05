import { useState } from "react";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { customColor } from "../../style";

const LikeSection = () => {
  const [totlaLikes, setTotalLikes] = useState(0);

  const handleAddLike = (likes) => {
    setTotalLikes(totlaLikes + likes);
  };

  return (
    <Stack direction="row" spacing={1}>
      <Typography variant="subtitle2" sx={{ lineHeight: 2 }}>
        {totlaLikes}❤️
      </Typography>
      <Button
        size="small"
        sx={{
          background: customColor.red.primary,
          maxWidth: "30px",
          maxHeight: "30px",
          minWidth: "30px",
          minHeight: "30px",
        }}
        onClick={(e) => handleAddLike(1)}
      >
        +
      </Button>
      <Button
        size="small"
        sx={{
          background: customColor.red.primary,
          maxWidth: "30px",
          maxHeight: "30px",
          minWidth: "30px",
          minHeight: "30px",
        }}
        onClick={(e) => handleAddLike(3)}
      >
        +++
      </Button>
    </Stack>
  );
};

export default LikeSection;
