import { AppBar, Container, Toolbar, Typography, Box } from "@mui/material";
import NavigationDrawer from "../NavigationDrawer";

const NavBarMain = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <NavigationDrawer />
          <Box align="center" sx={{ width: "100%" }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Learn React
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBarMain;
