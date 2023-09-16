import { Typography } from "@mui/material";
import { useEffect } from "react";
import { customColor } from "../../style";

const Timer = ({ secondsRemaining, dispatch }) => {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);
  return (
    <Typography
      sx={{
        border: `2px solid ${customColor.blue.fade}`,
        borderRadius: 3,
        minWidth: 50,
        maxWidth: 100,
        maxHeight: 30,
      }}
    >
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </Typography>
  );
};

export default Timer;
