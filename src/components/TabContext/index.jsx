import { useState } from "react";

import { Box, Button, Stack, Typography } from "@mui/material";
import { customColor } from "../../style";

import LikeSection from "../LikeSection";

const TabContext = ({ content }) => {
  const [hideDetails, setHideDetails] = useState(false);

  const handleHideDetails = () => {
    setHideDetails(!hideDetails);
  };

  return (
    <Box sx={{ mt: 1, background: customColor.blue.light, padding: 3 }}>
      <Typography
        variant="subtitle2"
        sx={{ color: customColor.blue.deep, fontWeight: 800 }}
      >
        {content.summary}
      </Typography>
      {content?.details && (
        <Box sx={{ mt: 2, background: customColor.amber.light, padding: 3 }}>
          {!hideDetails && <Typography paragraph>{content.details}</Typography>}
          <Stack direction="row" justifyContent="space-between">
            <Button
              size="small"
              sx={{ textDecoration: "underline" }}
              onClick={handleHideDetails}
            >
              {hideDetails ? "Show details" : "Hide details"}
            </Button>
            <LikeSection key={content.details}></LikeSection>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default TabContext;
