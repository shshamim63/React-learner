import { Stack, Button } from "@mui/material";

import { customColor } from "../../style";

const QuestionOption = ({ question, answer, dispatch }) => {
  return (
    <Stack spacing={2} sx={{ mt: 3 }}>
      {question.options.map((option, index) => {
        return (
          <Button
            variant="text"
            sx={{
              justifyContent: "flex-start",
              background:
                answer != null
                  ? answer === index
                    ? answer === question.correctOption
                      ? customColor.green.light
                      : customColor.red.light
                    : index === question.correctOption
                    ? customColor.green.light
                    : customColor.orange.light
                  : customColor.grey.light,
              padding: 2,
              borderRadius: 5,
              fontWeight: 600,
              textTransform: "none",
            }}
            disabled={answer != null}
            key={index}
            onClick={() => dispatch({ type: "answer", payload: index })}
          >
            {option}
          </Button>
        );
      })}
    </Stack>
  );
};

export default QuestionOption;
