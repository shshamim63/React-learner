import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, Button, Grid, Card, CardHeader, CardContent, Stack, Typography, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

const messages = [
  'Learn React',
  'Apply for jobs',
  'Invest your new income'
];


const themeHeader = createTheme();

themeHeader.typography.h4 = {
  fontSize: '2rem',
  lineHeight: '5.5rem',
  '@media (min-width:600px)': {
    fontSize: '2.5rem',
  },
  [themeHeader.breakpoints.up('md')]: {
    fontSize: '3rem',
  },
};

export const Step = () => {
  
  const [stepNumber, setStepNumber] = useState(1)
  
  const [isOpen, setIsOpen] = useState(true)

  const handlePrevious = () => {
    if(stepNumber > 1) setStepNumber(stepNumber - 1)
  }
  const handleNext = () => {
    if(stepNumber < 3) setStepNumber(stepNumber + 1)
  }

  const handleOnClick = () => {
    setIsOpen(!isOpen)
    setStepNumber(1)
  }

  return (
    <Container maxWidth='lg'>
      <ThemeProvider theme={themeHeader}>
        <Typography variant='h4' align='center' color='textPrimary' gutterBottom marginTop={3}>Track Your Progress</Typography>
      </ThemeProvider>
      <Typography variant='subtitle2' align='center' color='textSecondary' paragraph>Update your progess as you move forward</Typography>
      <Grid container spacing={2} justifyContent='center'>
        <Grid item xs={8} sm={6} md={5} lg={5}>
          <Card>
            {isOpen && <CardHeader
              action={
                <IconButton aria-label="settings" onClick={handleOnClick}>
                  <CloseIcon />
                </IconButton>
              }
            />
            }
            <CardContent>
            { isOpen && (
              <>
                <Grid container spacing={1} justifyContent='center'>
                  <Grid item xs={4} sm={4} md={4} >
                    <Typography variant='h6' align='center' backgroundColor={ stepNumber >= 1 ? "primary.dark" : 'white'} width={35} borderRadius={50} margin='auto'>1</Typography>
                  </Grid>
                  <Grid item xs={4} sm={3} md={4}>
                    <Typography variant='h6' align='center' backgroundColor={ stepNumber >= 2 ? "primary.dark" : 'white'} width={35} borderRadius={50} margin='auto'>2</Typography>
                  </Grid>
                  <Grid item xs={4} sm={3} md={4}>
                    <Typography variant='h6' align='center' backgroundColor={ stepNumber >= 3 ? "primary.dark" : 'white'} width={35} borderRadius={50} margin='auto'>3</Typography>
                  </Grid>
                </Grid>
                <Typography variant="subtitle2" color='textSecondary' align='center' marginTop={4} paragraph>Step {stepNumber}: {messages[stepNumber-1]}</Typography>
                <Grid container spacing={1} justifyContent='space-between'>
                  <Grid item>
                    <Button variant="contained" onClick={handlePrevious} size='small' startIcon={<ArrowLeftIcon />}>
                      Previous
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" onClick={handleNext} size='small' endIcon={<ArrowRightIcon />}>
                      Next
                    </Button>
                  </Grid>
                </Grid>
              </>
            )}
            { !isOpen && (
              <Box sx={{width: 250, height: 150, margin: 'auto', marginTop: 2}}>
                <Stack useFlexGap flexWrap="wrap" spacing={2} sx={{margin: 'auto'}}>
                    <IconButton aria-label="show-progess" size="large" color='primary' onClick={handleOnClick}>
                      <AddCircleOutlineRoundedIcon fontSize="inherit" />
                    </IconButton>
                  <Typography variant='subtitle2' textAlign='center'>Enable progress</Typography>
                </Stack>
              </Box>
            )}
            </CardContent>
          </Card>   
        </Grid>
      </Grid>
    </Container>
  )
}

export default Step