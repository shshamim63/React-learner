import { Box, Button } from "@mui/material";

import { customColor } from "../../style";

const NextButton = ({ dispatch, numQuestion, index }) => {
  if (index < numQuestion - 1) {
    return (
      <Box>
        <Button
          variant="outlined"
          sx={{
            minWidth: "20%",
            maxWidth: "30%",
            mt: 3,
            display: "flex",
            float: "right",
            color: customColor.indigo.fade,
          }}
          onClick={() => dispatch({ type: "next" })}
        >
          Next
        </Button>
      </Box>
    );
  }
  if (index === numQuestion - 1) {
    return (
      <Box>
        <Button
          variant="outlined"
          sx={{
            minWidth: "20%",
            maxWidth: "30%",
            mt: 3,
            display: "flex",
            float: "right",
            color: customColor.indigo.fade,
          }}
          onClick={() => dispatch({ type: "finish" })}
        >
          Finish
        </Button>
      </Box>
    );
  }
};

export default NextButton;
