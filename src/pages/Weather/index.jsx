import { useEffect } from "react";
import { Link } from "react-router-dom";

import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { customColor } from "../../style";

import WeatherContainer from "../../components/WeatherContainer";

const Weather = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <Box
      sx={{
        maxWidth: { sm: "sm", md: "md", lg: "lg" },
        margin: "auto",
        mt: 2,
      }}
    >
      <AppBar position="static" sx={{ background: customColor.blue.fade }}>
        <Toolbar disableGutters sx={{ margin: "auto" }}>
          <Typography
            variant="subtitle2"
            noWrap
            component={Link}
            to="/eeather"
            sx={{
              color: customColor.orange.fade,
              fontSize: 18,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: "0.2rem",
              textDecoration: "none",
            }}
          >
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <WeatherContainer />
    </Box>
  );
};

export default Weather;
