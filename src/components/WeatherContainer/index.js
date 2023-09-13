import { Box } from "@mui/material";
import { customColor } from "../../style";
import { useState } from "react";

import WeatherForm from "../WeatherForm";

const WeatherContainer = () => {
  const [weather, setWeather] = useState([]);

  return (
    <Box
      maxWidth="95%"
      sx={{
        background: customColor.blue.light,
        margin: "auto",
        borderStyle: "double",
        padding: 1,
        minHeight: 350,
        maxHeight: 450,
      }}
    >
      <WeatherForm />
    </Box>
  );
};

export default WeatherContainer;
