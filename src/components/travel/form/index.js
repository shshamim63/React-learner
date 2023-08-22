import { useState } from "react"

import { FormControl, Typography, TextField, MenuItem, Button, Grid, Box, Stack, InputLabel, Select, IconButton } from "@mui/material";
import AddCardIcon from '@mui/icons-material/AddCard';


import uuid from 'react-uuid';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

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

  const handleOnChangeQuantity = (e) => {
    setQuantity(e.target.value)
  }

  return (
    <Grid container justifyContent='center' spacing={3} marginTop={1}>
      <Grid item md={5}>
        <Typography variant="subtitle2" color='textSecondary' align="right" lineHeight={3}>What would you like to bring to your trip? 😍</Typography>
      </Grid>
      <Grid item md={5}>
        <Stack direction='row' spacing={3}>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <InputLabel id="item-quantity">Quantity</InputLabel>
              <Select
                labelId="item-quantity"
                value={quantity}
                label="quantity"
                size="small"
                onChange={handleOnChangeQuantity}
                MenuProps={MenuProps}
              >
                {
                  Array.from({length: 20}, (_, i) => i+1).map((val)=> (<MenuItem key={val-1} value={val}>{val}</MenuItem>))
                }
              </Select>
            </FormControl>
            <TextField
              id="item-description"
              label="Description"
              type="text"
              size="small"
              value={description}
              onChange={handleOnChange}
            />
            <Button type="submit" variant="contained" size="medium" sendIcon={<AddCardIcon />}>
              Add
            </Button>
          </form>
        </Stack> 
      </Grid>
    </Grid>
  )
}

export default Form