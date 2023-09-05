import { Button, Stack, Typography } from "@mui/material";
import { customColor } from "../../style";

const LikeSection = ({ totlaLikes, handleAddLike }) => {
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
