import { useState } from "react";

import { Box, Button, Stack, Typography } from "@mui/material";
import { customColor } from "../../style";

import LikeSection from "../LikeSection";

const TabContent = ({ content }) => {
  const [hideDetails, setHideDetails] = useState(false);
  const [totlaLikes, setTotalLikes] = useState(0);

  const handleAddLike = (likes) => {
    setTotalLikes(totlaLikes + likes);
  };

  const handleHideDetails = () => {
    setHideDetails(!hideDetails);
  };

  const handleUndo = () => {
    setTotalLikes(0);
    setHideDetails(false);
  };

  const handleUndoLater = () => {
    setTimeout(handleUndo, 2000);
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
        <Box
          sx={{
            mt: 2,
            background: customColor.amber.light,
            padding: 3,
            borderRadius: 4,
          }}
        >
          {!hideDetails && <Typography paragraph>{content.details}</Typography>}
          <Stack direction="row" justifyContent="space-between">
            <Button
              size="small"
              sx={{ textDecoration: "underline" }}
              onClick={handleHideDetails}
            >
              {hideDetails ? "Show details" : "Hide details"}
            </Button>
            <LikeSection
              handleAddLike={handleAddLike}
              totlaLikes={totlaLikes}
            ></LikeSection>
          </Stack>
          <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
            <Button
              size="small"
              onClick={handleUndo}
              sx={{ background: customColor.blue.light }}
            >
              Undo
            </Button>
            <Button
              size="small"
              sx={{ background: customColor.blue.light }}
              onClick={handleUndoLater}
            >
              Undo in 2s
            </Button>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default TabContent;
