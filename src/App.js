import { Container } from '@mui/material';
import Step from './components/step';
import Travel from './components/travel';

function App() {

  return (
    <Container maxWidth={false}>
      <Step></Step>
      <Travel></Travel>
    </Container>
  );
}

export default App;
