import { Box } from "@mui/material";
import { customColor } from "../../style";
import { useState } from "react";

import WeatherForm from "../WeatherForm";
import WeatherForecastInfo from "../WeatherForecastInfo";
import Loader from "../Loader";

import { useFetchWeather } from "../../hooks/fetchWeather";
import BasicError from "../BasicError";

const WeatherContainer = () => {
  const [location, setLocation] = useState("");
  const { isLoading, area, error, weather } = useFetchWeather(location);
  return (
    <Box
      maxWidth="95%"
      sx={{
        background: customColor.amber.fade,
        margin: "auto",
        borderStyle: "double",
        padding: 1,
        minHeight: 650,
        maxHeight: 1050,
        overflow: "auto",
      }}
    >
      <WeatherForm setLocation={setLocation} />
      {isLoading && (
        <Box sx={{ width: "50%", margin: "auto", mt: 10 }}>
          <Loader></Loader>
        </Box>
      )}
      {!isLoading && error && <BasicError message={error} />}
      {!isLoading && !error && weather.length > 0 && (
        <WeatherForecastInfo area={area} weather={weather} />
      )}
    </Box>
  );
};

export default WeatherContainer;
