import { Stack, Typography, LinearProgress } from "@mui/material";

const Progress = ({ index, numQuestion, points, total }) => {
  const currentProgress = (index / numQuestion) * 100;
  return (
    <Stack spacing={{ xs: 1, sm: 2 }} useFlexGap flexWrap="wrap">
      <LinearProgress variant="determinate" value={currentProgress} />
      <Stack direction="row">
        <Typography sx={{ flexGrow: 1 }}>{`Question ${
          index + 1
        }/${numQuestion}`}</Typography>
        <Typography sx={{ flexGrow: 1 }} align="right">
          {`${points}/${total} Points`}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Progress;
