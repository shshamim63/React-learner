import { Button, Stack, Typography } from "@mui/material";
import { customColor } from "../../style";

const QuizStarterScreen = ({ numQuestion, onStartQuiz }) => {
  return (
    <Stack justifyContent="center" alignItems="center">
      <Typography variant="h2" sx={{ color: "white" }}>
        Welcome to The React Quiz
      </Typography>
      <Typography variant="h5" sx={{ color: "white", mt: 3 }}>
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
