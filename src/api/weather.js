import axios from "axios";

export const getGeoData = async (name) => {
  let response;
  try {
    response = await axios.get(
      `https://geocoding-api.open-meteo.com/v1/search?name=${name}`
    );
  } catch (error) {
    throw new Error("Location does not exist");
  }
  if (response.data?.results) return response.data.results?.at(0);
  throw new Error("Location not found");
};

export const getWeatherData = async ({ latitude, longitude, timezone }) => {
  let response;
  try {
    response = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=${timezone}`
    );
  } catch (error) {
    throw new Error("Could not get weather information");
  }
  if (response.status === 200) return response.data;
  throw new Error("Bad Request");
};
