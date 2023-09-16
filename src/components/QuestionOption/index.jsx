import { Stack, Button } from "@mui/material";

import { customColor } from "../../style";

const QuestionOption = ({ options }) => {
  return (
    <Stack spacing={2} sx={{ mt: 3 }}>
      {options.map((option, index) => {
        return (
          <Button
            variant="text"
            sx={{
              justifyContent: "flex-start",
              background: customColor.indigo.light,
              height: 50,
              padding: 3,
              borderRadius: 5,
            }}
            key={index}
          >
            {option}
          </Button>
        );
      })}
    </Stack>
  );
};

export default QuestionOption;
