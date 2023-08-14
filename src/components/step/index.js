import { useState } from 'react';
import './index.css'
import { Box, Button, Grid, Card, CardHeader, CardContent } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

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
      width:25, 
      height: 25,
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
              <p className='message'>Step {stepNumber}: {messages[stepNumber-1]}</p>
              <Box className='buttons'>
                  <button className='previous' onClick={handlePrevious}>Previous</button>
                  <button className='next' onClick={handleNext}>Next</button>
              </Box>
            </Box>
            )
          }
          { !isOpen }
      </CardContent>
    </Card>
    
  )
}

export default Step