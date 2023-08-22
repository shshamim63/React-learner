import { AppBar, Container, CssBaseline, Toolbar, Typography } from '@mui/material';
import Step from './components/step';
import Travel from './components/travel';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

function App() {

  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <LocalLibraryIcon></LocalLibraryIcon>
          <Typography variant='h6'>Learn React</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth='lg'>
            <Step></Step>
          </Container>
          <Travel></Travel>
        </div>
      </main>
    </>
  );
}

export default App;
