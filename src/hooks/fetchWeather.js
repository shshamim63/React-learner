import { useEffect, useState } from "react";

import { getGeoData, getWeatherData } from "../api/weather";

import { generateWeatherData } from "../helper/weather";

export const useFetchWeather = (location) => {
  const [weather, setWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [area, setArea] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!location) return;
    const controller = new AbortController();
    const fetchWeatherData = async () => {
      try {
        setIsLoading(true);
        const geoData = await getGeoData(location);
        const { latitude, longitude, timezone, admin1, country } = geoData;
        setArea({ place: admin1, country });
        const weatherResponse = await getWeatherData({
          latitude,
          longitude,
          timezone,
        });
        const weatherData = generateWeatherData(weatherResponse);
        setWeather(weatherData);
        setError("");
        setIsLoading(false);
      } catch (error) {
        setArea({});
        setIsLoading(false);
        setError(error.message);
      }
    };
    fetchWeatherData();
    return () => {
      controller.abort();
    };
  }, [location]);

  return { isLoading, area, error, weather };
};
