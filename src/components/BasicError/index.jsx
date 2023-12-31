import { Box, Typography } from "@mui/material";

const BasicError = ({ message }) => {
  return (
    <Box sx={{ height: 200, mt: 20 }}>
      <Typography
        variant="h6"
        sx={{ fontWeight: 700 }}
        textAlign="center"
      >{`⛔️ ${message} ⛔️ `}</Typography>
    </Box>
  );
};

export default BasicError;
