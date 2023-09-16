import { Typography } from "@mui/material";
import { customColor } from "../../style";

import QuestionOption from "../QuestionOption";

const Question = ({ question, dispatch, answer }) => {
  return (
    <>
      <Typography
        textAlign="center"
        sx={{
          fontSize: { xs: 14, md: 18, lg: 20 },
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
