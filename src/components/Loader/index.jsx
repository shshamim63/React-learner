import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const Loader = () => {
  return (
    <Box sx={{ height: 200, mt: 10 }}>
      <CircularProgress sx={{ ml: 28, mt: 10, mb: 2 }} />
      <Typography align="center">Please wait...</Typography>
    </Box>
  );
};

export default Loader;
