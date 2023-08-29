import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputBase,
  IconButton,
  Stack,
} from "@mui/material";
import BentoIcon from "@mui/icons-material/Bento";
import SearchIcon from "@mui/icons-material/Search";
import { customColor } from "../../style";

const NavbarMovie = () => {
  const handleOnChange = () => {
    console.log("I am chaning");
  };
  return (
    <Box sx={{ flexGrow: 1, maxWidth: "md", margin: "auto", mt: 2 }}>
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
            to="/usepopcorns"
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
            <Stack direction="row">
              <InputBase
                sx={{ ml: 1, width: { xs: 130, sm: 150 } }}
                placeholder="Search Movies"
                inputProps={{ "aria-label": "search google maps" }}
                onChange={handleOnChange}
              />
              <IconButton type="button" aria-label="search">
                <SearchIcon />
              </IconButton>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavbarMovie;
