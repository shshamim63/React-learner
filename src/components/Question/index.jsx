import { Paper, Typography } from "@mui/material";
import { customColor } from "../../style";

import QuestionOption from "../QuestionOption";

const Question = ({ question, dispatch, answer }) => {
  return (
    <>
      <Typography
        textAlign="center"
        sx={{
          fontSize: { xs: 18, md: 22, lg: 28 },
          color: customColor.orange.fade,
        }}
      >
        {question.question}
      </Typography>
      <QuestionOption question={question} dispatch={dispatch} answer={answer} />
    </>
  );
};

export default Question;
