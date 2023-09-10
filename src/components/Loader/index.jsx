import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const Loader = () => {
  return (
    <Box sx={{ height: 200, mt: "45%" }}>
      <CircularProgress
        sx={{
          maxHeight: 40,
          minHeight: 20,
          minWidth: 40,
          maxWidth: 20,
          ml: "45%",
          mt: "10%",
        }}
      />
      <Typography align="center" sx={{ mt: 5 }}>
        Please wait...
      </Typography>
    </Box>
  );
};

export default Loader;
