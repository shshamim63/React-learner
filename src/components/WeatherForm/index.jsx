import { Stack, Button, Paper, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { customColor } from "../../style";

const WeatherForm = () => {
  const inputEl = useRef(null);
  const [location, setLocation] = useState("");

  const onChangeLocation = (e) => {
    setLocation(e.target.value);
  };

  useEffect(() => {
    if (!location) inputEl.current.focus();
  }, [location]);

  return (
    <Paper
      elevation={2}
      sx={{
        maxWidth: { md: "40%" },
        margin: "auto",
        padding: 3,
        background: customColor.amber.secondary,
      }}
    >
      <form>
        <Stack justifyContent="center" spacing={0.5}>
          <TextField
            fullWidth
            placeholder="Enter Location"
            size="small"
            value={location}
            onChange={onChangeLocation}
            inputRef={inputEl}
          ></TextField>
          <Button
            type="submit"
            sx={{
              background: customColor.blue.secondary,
            }}
          >
            {" "}
            GetInfo
          </Button>
        </Stack>
      </form>
    </Paper>
  );
};

export default WeatherForm;
