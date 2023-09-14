import { Paper, Grid, Stack, Typography, Box } from "@mui/material";
import { customColor } from "../../style";

const WeatherForecastInfo = ({ area, weather }) => {
  return (
    <Stack>
      <Box
        sx={{
          height: 40,
          width: { xs: "80%", sm: "60%", md: "40%" },
          margin: "auto",
          mt: 1,
          background: customColor.indigo.fade,
        }}
      >
        <Typography
          variant="h6"
          textAlign="center"
          sx={{ lineHeight: 2, color: "white" }}
        >
          {area.place}, {area.country}
        </Typography>
      </Box>
      <Paper elevation={3} sx={{ width: "95%", margin: "auto", mt: 2 }}>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 2 }}
          justifyContent={{ xs: "space-around", sm: "space-between" }}
          sx={{ background: customColor.grey.secondary }}
        >
          {weather.map((info, index) => {
            return (
              <Grid item xs={8} sm={6} md={4} key={index}>
                <Stack
                  spacing={2}
                  sx={{
                    height: 150,
                    background: customColor.blue.secondary,
                    padding: 3,
                  }}
                >
                  <Typography
                    textAlign="center"
                    sx={{
                      fontFamily: "monoscope",
                      fontWeight: 700,
                      fontSize: 16,
                    }}
                  >
                    {" "}
                    {info.date}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "monoscope",
                      fontWeight: 400,
                      fontSize: 15,
                    }}
                  >
                    {" "}
                    Minimum Temparature: {info.minTemparature} {info.unit}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "monoscope",
                      fontWeight: 400,
                      fontSize: 15,
                    }}
                  >
                    Maximum Temparature: {info.maxTemparature} {info.unit}
                  </Typography>
                </Stack>
              </Grid>
            );
          })}
        </Grid>
      </Paper>
    </Stack>
  );
};

export default WeatherForecastInfo;
