import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Container, Typography } from '@mui/material'

const themeHeader = createTheme();

themeHeader.typography.h2 = {
  fontSize: '2.5rem',
  lineHeight: '5.5rem',
  '@media (min-width:600px)': {
    fontSize: '3rem',
  },
  [themeHeader.breakpoints.up('md')]: {
    fontSize: '3.5rem',
  },
};

const Logo = () => {
  return (
    <Container>
      <ThemeProvider theme={themeHeader}>
        <Typography variant='h2' sx={{ backgroundColor: 'wheat', height: 85, textAlign: 'center', marginTop: 2}}>🌴 Far Away 🧳</Typography> 
      </ThemeProvider>
    </Container>
  )
}

export default Logo