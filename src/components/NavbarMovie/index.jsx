import { customColor } from "../../style";
import { Link } from "react-router-dom";

import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import BentoIcon from "@mui/icons-material/Bento";

const NavbarMovie = ({ children }) => {
  return (
    <AppBar position="static" sx={{ background: customColor.amber.deep }}>
      <Toolbar>
        <BentoIcon
          sx={{
            display: { xs: "flex" },
            mr: 1,
            color: customColor.blue.deep,
          }}
        />
        <Typography
          variant="subtitle2"
          noWrap
          component={Link}
          to="/usepopcorn"
          sx={{
            mr: 2,
            display: { xs: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: "0.2rem",
            color: customColor.blue.deep,
            textDecoration: "none",
            mt: 0.5,
          }}
        >
          UsePopcorn
        </Typography>
        <Box
          sx={{
            display: "flex",
            position: "absolute",
            right: 10,
            background: customColor.yellow.deep,
            borderRadius: 2,
          }}
        >
          {children}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarMovie;
