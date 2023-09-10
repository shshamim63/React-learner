import {
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Stack,
} from "@mui/material";

import StarRating from "../StarRating";

import { customColor } from "../../style";

const SelectedMovie = ({ selectedMovie }) => {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          minWidth: "100%",
          minHeight: 250,
          padding: 10,
          mt: 4.5,
          background: customColor.indigo.light,
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={selectedMovie.Poster}
          alt="Live from space album cover"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, fontFamily: "monoscope" }}
            >
              {selectedMovie.Title}
            </Typography>
            <Stack>
              <Typography
                variant="body"
                sx={{
                  color: customColor.grey.primary,
                  fontWeight: 600,
                  fontSize: "11px",
                  fontFamily: "Roboto",
                }}
              >
                {`${selectedMovie.DVD} - ${selectedMovie.Runtime}`}
              </Typography>
              <Typography
                variant="body"
                sx={{
                  color: customColor.grey.primary,
                  fontWeight: 600,
                  fontSize: "11px",
                  fontFamily: "Roboto",
                }}
              >
                {selectedMovie.Genre}
              </Typography>
            </Stack>
          </CardContent>
        </Box>
      </Card>
      <StarRating maxRating={10} size="small" defaultRating={6} />
    </>
  );
};

export default SelectedMovie;
