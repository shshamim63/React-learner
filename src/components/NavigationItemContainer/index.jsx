import { Link } from "react-router-dom";

import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
} from "@mui/material";

import StairsIcon from "@mui/icons-material/Stairs";
import LuggageIcon from "@mui/icons-material/Luggage";
import SafetyDividerIcon from "@mui/icons-material/SafetyDivider";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import QuizIcon from "@mui/icons-material/Quiz";

import { pages } from "../../contants/utils";

const pageIcon = (page) => {
  switch (page) {
    case "Tracker":
      return <StairsIcon />;
    case "Travel":
      return <LuggageIcon />;
    case "Expenses":
      return <SafetyDividerIcon />;
    case "Worldwide":
      return <TravelExploreIcon />;
    case "UsePopcorn":
      return <LiveTvIcon />;
    case "HowReactWorks":
      return <AcUnitIcon />;
    case "ReactQuiz":
      return <QuizIcon />;
    default:
  }
};

const NavigationItemContainer = ({ handleDrawerStatus }) => {
  const toggleDrawerStatus = (status) => {
    handleDrawerStatus(status);
  };

  return (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={(e) => toggleDrawerStatus(false)}
      onKeyDown={(e) => toggleDrawerStatus(false)}
    >
      <List>
        {pages.length > 0 &&
          pages.map((page) => (
            <ListItem key={page} component={Link} to={`/${page.toLowerCase()}`}>
              <ListItemButton>
                <ListItemIcon>{pageIcon(page)}</ListItemIcon>
                <ListItemText primary={page} />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </Box>
  );
};

export default NavigationItemContainer;
