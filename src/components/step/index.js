import { useState } from 'react';
import './index.css'
import { Box, Button, Grid, Card, CardHeader, CardContent, Stack, Typography } from '@mui/material';
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
    <Card sx={{ maxWidth: 500, margin: 'auto' }}>
      {isOpen && <CardHeader
          action={
            <IconButton aria-label="settings" onClick={handleOnClick}>
              <CloseIcon />
            </IconButton>
          }
        />
      }
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
    
  )
}

export default Step