import { AppBar, Box, Container, IconButton, Toolbar, Typography, Menu, MenuItem, Button } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import { useState } from "react";
import { Link } from "react-router-dom";

const pages = ['Tracker', 'Travel', 'Expenses']

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = (selectedPage) => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LocalLibraryIcon sx={{display: { xs: 'none', md: 'flex'}, mr: 1}} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: {xs: 'none', md: 'flex'},
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            Learn React
          </Typography>
          <Box sx={{ flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
            <IconButton
              size="large"
              aria-label="account"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} component={Link} to={`/${page.toLowerCase()}`}>
                  <Typography textAlign="center">{page.toLowerCase()}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <LocalLibraryIcon sx={{display: { xs: 'flex', md: 'none'}, mr: 1}} />
          <Typography 
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: {xs: 'flex', md: 'none'},
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >Learn React</Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                component={Link} 
                to={`/${page.toLowerCase()}`}
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
                containerElement={<Link to='/travel'/>}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar