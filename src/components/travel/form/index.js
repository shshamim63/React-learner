import { FormControl, Typography, TextField, MenuItem, Button, Grid, Box, Stack } from "@mui/material";
import AddCardIcon from '@mui/icons-material/AddCard';

import { useState } from "react"

import uuid from 'react-uuid';

const Form = ({addItem}) => {
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState(1)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!description && quantity > 0) return
    const newItem = {description, quantity, packed: false, id: uuid()}
    setDescription('')
    setQuantity(1)
    addItem(newItem)
  }

  const handleOnChange = (e) => {
    setDescription(e.target.value)
  }

  const handleOnSelectChange = (e) => {
    setQuantity(e.target.value)
  }

  return (
    <Box sx={{md: {width: 50}, marginTop: 2}}>
      <Grid container spacing={1}>
        <Grid item xs={5}>
          <Typography sx={{ height: 'auto', lineHeight: 3, textAlign: 'center' }} variant="subtitle2">What would you like to bring to your trip? 😍</Typography>
        </Grid>
        <Grid item xs={7}>
          <form onSubmit={handleSubmit}>
            <FormControl className="add-form" sx={{width: 'auto', margin: 'auto'}}>    
              <Stack direction="row" spacing={1}>
                <TextField 
                  id="outlined-item-number"
                  select
                  label="Select"
                  value={quantity}
                  helperText="Enter quantity"
                  size="small"
                  onChange={handleOnSelectChange}
                >
                  {Array.from({length: 20}, (_, i) => i+1).map((val) => 
                    (<MenuItem key={val+1} value={val}>{val}</MenuItem>))}
                </TextField>
                <TextField size="small" id="outlined-basic" label="item" variant="outlined" value={description} onChange={handleOnChange} />
                <Button type="submit" size="small" variant="contained" endIcon={<AddCardIcon />} sx={{height: 40}} >
                  Add
                </Button>
              </Stack>
            </FormControl>
          </form>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Form