import { useState } from "react";

import { SwipeableDrawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import NavigationItemContainer from "../NavigationItemContainer";

const NavigationDrawer = () => {
  const [drawerStatus, setDrawerStatus] = useState(false);
  const handleDrawerStatus = (status) => {
    setDrawerStatus(status);
  };

  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={(e) => handleDrawerStatus(!drawerStatus)}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={drawerStatus}
        onClose={(e) => handleDrawerStatus(false)}
        onOpen={(e) => handleDrawerStatus(true)}
      >
        <NavigationItemContainer handleDrawerStatus={handleDrawerStatus} />
      </SwipeableDrawer>
    </div>
  );
};

export default NavigationDrawer;
