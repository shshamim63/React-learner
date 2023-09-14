import { Stack, Button, Paper, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { customColor } from "../../style";

const WeatherForm = ({ setLocation }) => {
  const inputEl = useRef(null);
  const [input, setInput] = useState("");

  const onChangeLocation = (e) => {
    setInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setInput("");
    setLocation(input);
  };

  useEffect(() => {
    if (!input) inputEl.current.focus();
  }, [input]);

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
      <form onSubmit={onSubmit}>
        <Stack justifyContent="center" spacing={0.5}>
          <TextField
            fullWidth
            placeholder="Enter Location"
            size="small"
            value={input}
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
            Get Info
          </Button>
        </Stack>
      </form>
    </Paper>
  );
};

export default WeatherForm;
