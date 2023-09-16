import { Button, Stack, Typography } from "@mui/material";
import { customColor } from "../../style";

const QuizStarterScreen = ({ numQuestion, onStartQuiz }) => {
  return (
    <Stack justifyContent="center" alignItems="center">
      <Typography
        sx={{ color: "white", fontSize: { xs: 30, md: 50 }, fontWeight: 800 }}
      >
        Welcome to The React Quiz
      </Typography>
      <Typography
        sx={{
          color: "white",
          mt: 3,
          fontSize: { xs: 18, md: 30 },
          fontWeight: 400,
        }}
      >
        {" "}
        {numQuestion} questions to test your react mastery
      </Typography>
      <Button
        onClick={onStartQuiz}
        variant="contained"
        sx={{
          minWidth: 150,
          maxWidth: 200,
          mt: 10,
          background: customColor.grey.secondary,
          color: customColor.indigo.fade,
          "&:hover": {
            background: customColor.blue.secondary,
            color: "white",
          },
        }}
      >
        Let's Start
      </Button>
    </Stack>
  );
};

export default QuizStarterScreen;
