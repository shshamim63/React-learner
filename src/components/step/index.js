import { useState } from 'react';
import { Container,Box, Button, Grid, Card, CardHeader, CardContent, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

import { useStyles } from './style';

const messages = [
  'Learn React',
  'Apply for jobs',
  'Invest your new income'
];

export const Step = () => {
  const classes = useStyles()
  
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

  const calculateActiveStyling = (currentStatus) => {
    return {
      width: 25, 
      height: 25,
      color: stepNumber >= currentStatus ? 'white' : 'black',
      backgroundColor: stepNumber >= currentStatus ? 'primary.dark' : '#fff',
      border: 'none',
      borderRadius: '50%',
      textAlign: 'center',
      lineHeight: '1.75',
      margin: 'auto'
    }
  }
  return (
    <Container maxWidth='lg'>
      <Typography variant='h4' align='center' color='textPrimary' gutterBottom marginTop={3}>Track Your Progress</Typography>
      <Typography variant='subtitle2' align='center' color='textSecondary' paragraph>Update your progess as you move forward</Typography>
      <Grid container spacing={2} justifySelf='center'>
        <Grid item>
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
              <Grid container spacing={3} justify='center'>
                <Grid item>
                  <Typography variant='h6' align='center' backgroundColor='blue' width={35} borderRadius={50}>1</Typography>
                </Grid>
                <Grid item>
                  <Typography variant='h6' align='center' backgroundColor='blue' width={35} borderRadius={50}>2</Typography>
                </Grid>
                <Grid item >
                  <Typography variant='h6' align='center' backgroundColor='blue' width={35} borderRadius={50}>3</Typography>
                </Grid>
              </Grid>
            )}
            </CardContent>
          </Card>   
        </Grid>
      </Grid>
      <Card>
        <CardContent>
            { isOpen && 
              (<Box sx={{margin: 'auto'}}>
                <Grid container spacing={4}>
                  <Grid item xs={4}>
                    <Box sx = {calculateActiveStyling(1)}>1</Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Box sx = {calculateActiveStyling(2)}>2</Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Box sx = {calculateActiveStyling(3)}>3</Box>
                  </Grid>
                </Grid>
                <Typography variant="subtitle1" sx={{ marginTop: '30px', marginBottom: '30px', textAlign: 'center' }}>Step {stepNumber}: {messages[stepNumber-1]}</Typography>
                <Stack direction="row" spacing={35}>
                  <Button variant="outlined" onClick={handlePrevious} startIcon={<ArrowLeftIcon />}>
                      Previous
                  </Button>
                  <Button variant="contained" onClick={handleNext} endIcon={<ArrowRightIcon />}>
                    Next
                  </Button>
                </Stack>
              </Box>
              )
            }
            { !isOpen && (
                <Grid container spacing={1} sx={{height: 150}}>
                  <Grid xs={4}></Grid>
                  <Grid item xs={4} sx={{textAlign: 'center'}}>
                    <IconButton aria-label="show-progess" size="large" sx={{marginTop: 6, backgroundColor: 'wheat', color: 'white'}} onClick={handleOnClick}>
                      <AddCircleOutlineRoundedIcon fontSize="inherit" />
                    </IconButton>
                    <Typography variant='subtitle2' sx={{marginTop: 2}}>Enable progress</Typography>
                  </Grid>
                  <Grid xs={4}></Grid>
                </Grid>
            )}
        </CardContent>
      </Card>
    </Container>
  )
}

export default Step