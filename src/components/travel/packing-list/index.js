import { Box, Grid, Stack, MenuItem, FormControl, InputLabel, Select, Typography } from '@mui/material';
import { useState } from 'react'
import Item from '../item'

const sortedType = [
  {
    value:'input',
    innerText: 'Sort by input order'
  },
  {
    value:'description',
    innerText: 'Sort by description'
  },
  {
    value:'quantity',
    innerText: 'Sort by quantity'
  },
  {
    value:'packed',
    innerText: 'Sort by packed'
  }
]

const PackingList = ({items, handleDeleteItem, handleToggleCheck}) => {
  const [sortBy, setSortBy] = useState('input')
  let sortedItem;
  
  if(sortBy === 'input') sortedItem = items
  
  if(sortBy === 'description') sortedItem = items.slice().sort((a,b) => a.description.localeCompare(b.description))
  
  if (sortBy === 'quantity') {
    sortedItem = items.slice().sort((a,b) => a.quantity > b.quantity)
  }
  
  if (sortBy === 'packed') {
    sortedItem = items.slice().sort((a,b) => Number(a.packed) - Number(b.packed))
  }
  
  return (
    <Box>
      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
        {sortedItem.map((item, index) => (
          <Grid item xs={2} sm={3} md={3} key={index}>
            <Item key={item.id} item={item} removeItem={handleDeleteItem}  handleToggleCheck={handleToggleCheck}/>
          </Grid>
        ))}
      </Stack>
      { sortedItem.length > 0 && (<Box sx={{ width: '100%', marginTop: 3 }}>
        <Stack direction="row" spacing={{ xs: 1, sm: 2, md: 4 }} justifyContent="center">
          <Typography variant='subtitle2' sx={{ height: 'auto', lineHeight: 2.5, marginRight: 1 }}>Sort the items by</Typography>
          <FormControl >
            <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sortBy}
              label="Age"
              onChange={e => setSortBy(e.target.value)}
              size='small'
            >
              {sortedType && sortedType.map(item=> <MenuItem key={item.value} value={item.value}>{item.innerText}</MenuItem>)}
            </Select>
          </FormControl>
        </Stack>
      </Box>)}
    </Box>
  )
}

export default PackingList