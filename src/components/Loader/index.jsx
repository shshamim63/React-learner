import CircularProgress from "@mui/material/CircularProgress";
import { Typography } from "@mui/material";

const Loader = () => {
  return (
    <>
      <CircularProgress
        sx={{
          maxHeight: 40,
          minHeight: 20,
          minWidth: 40,
          maxWidth: 20,
          ml: "45%",
        }}
      />
      <Typography align="center" sx={{ mt: 5 }}>
        Please wait...
      </Typography>
    </>
  );
};

export default Loader;
