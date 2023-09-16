import { Box, Button, Stack, Typography } from "@mui/material";

import { customColor } from "../../style";

const FinishedScreen = ({ points, maxPoint, highscore, dispatch }) => {
  const scorePercentage = (points / maxPoint) * 100;
  let emoji;

  if (scorePercentage === 100) emoji = "💗";
  if (scorePercentage >= 80 && scorePercentage < 100) emoji = "🌟";
  if (scorePercentage >= 50 && scorePercentage < 80) emoji = "💪";
  if (scorePercentage < 50) emoji = "🔧";
  return (
    <Box
      sx={{
        minWidth: 350,
        maxWidth: "70%",
        background: customColor.grey.secondary,
        margin: "auto",
        padding: 5,
        borderRadius: 3,
      }}
    >
      <Stack alignItems="center" justifyContent="center">
        <Typography
          textAlign="center"
          sx={{ color: customColor.purple.deep, fontWeight: 700, fontSize: 18 }}
        >
          {emoji} You scored {points} out of {maxPoint}
        </Typography>
        <Typography
          textAlign="center"
          sx={{ color: customColor.amber.fade, fontWeight: 400, fontSize: 14 }}
        >
          Score percentage {Math.ceil(scorePercentage)}
        </Typography>
        <Typography
          textAlign="center"
          sx={{ color: customColor.amber.fade, fontWeight: 400, fontSize: 14 }}
        >
          High Score {highscore}
        </Typography>
        <Button
          sx={{ minWidth: 80, maxWidth: 120, mt: 5 }}
          onClick={() => dispatch({ type: "restart" })}
        >
          Restart
        </Button>
      </Stack>
    </Box>
  );
};

export default FinishedScreen;
