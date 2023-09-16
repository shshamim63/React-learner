import { Paper, Typography } from "@mui/material";
import { customColor } from "../../style";

import QuestionOption from "../QuestionOption";

const Question = ({ question }) => {
  return (
    <Paper
      sx={{
        minWidth: 350,
        maxWidth: "70%",
        background: customColor.grey.secondary,
        margin: "auto",
        padding: 5,
        borderRadius: 3,
      }}
    >
      <Typography
        textAlign="center"
        sx={{
          fontSize: { xs: 18, md: 22, lg: 28 },
          color: customColor.orange.fade,
        }}
      >
        {question.question}
      </Typography>
      <QuestionOption options={question.options} />
    </Paper>
  );
};

export default Question;