import { customColor } from "../../style";

import { Box, Typography } from "@mui/material";

import Tabbed from "../../components/Tabbed";

const tabs = [
  {
    tabName: "Tab 1",
    context: {
      summary: "React is a library for building UIs",
      details:
        "Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  },
  {
    tabName: "Tab 2",
    context: {
      summary: "State management is like giving state a home",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  },
  {
    tabName: "Tab 3",
    context: {
      summary: "We can think of props as the component API",
      details:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  },
  {
    tabName: "Tab 4",
    context: {
      summary:
        "We can think of props as the component APII'm a DIFFERENT tab, so I reset state 💣💥",
    },
  },
];

const HowReactWorks = () => {
  return (
    <Box
      sx={{
        maxWidth: "md",
        minWidth: "sm",
        margin: "auto",
        marginTop: 10,
      }}
    >
      <Box sx={{ borderRadius: 15, background: customColor.amber.light }}>
        <Typography
          variant="h5"
          sx={{ height: 45, fontFamily: "monoscope", fontWeight: 900 }}
          textAlign="center"
          lineHeight={2}
        >
          How React Works
        </Typography>
      </Box>
      <Tabbed tabs={tabs} />
    </Box>
  );
};

export default HowReactWorks;
