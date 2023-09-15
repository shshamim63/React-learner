import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Container, Typography } from "@mui/material";

const themeHeader = createTheme();

themeHeader.typography.h2 = {
  fontSize: "2.5rem",
  lineHeight: "5.5rem",
  "@media (min-width:600px)": {
    fontSize: "3rem",
  },
  [themeHeader.breakpoints.up("md")]: {
    fontSize: "3.5rem",
  },
};

const LogoHeader = ({ title, bgColor = "wheat" }) => {
  return (
    <Container>
      <ThemeProvider theme={themeHeader}>
        <Typography
          variant="h2"
          sx={{
            backgroundColor: bgColor,
            height: 85,
            textAlign: "center",
            mt: 2,
          }}
        >
          {title}
        </Typography>
      </ThemeProvider>
    </Container>
  );
};

export default LogoHeader;
