export const generateWeatherData = (data) => {
  const {
    daily: { time, temperature_2m_max, temperature_2m_min },
  } = data;
  const {
    daily_units: { temperature_2m_max: unit },
  } = data;

  return time.map((time, index) => {
    return {
      date: new Date(time).toDateString(),
      minTemparature: temperature_2m_min[index],
      maxTemparature: temperature_2m_max[index],
      unit: unit,
    };
  });
};
