import { Container, Grid, Stack, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
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
    <Container>
      { sortedItem.length > 0 && (
        <Grid container direction="row-reverse" marginBottom={2}>
          <Grid item>
            <FormControl >
              <InputLabel id="sort-by">Sort By</InputLabel>
              <Select
                labelId="sort-by"
                id="sort-by"
                value={sortBy}
                label="Sort By"
                onChange={e => setSortBy(e.target.value)}
                size='small'
              >
                {sortedType && sortedType.map(item=> <MenuItem key={item.value} value={item.value}>{item.innerText}</MenuItem>)}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      )}
      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
        {sortedItem.map((item, index) => (
          <Grid item xs={2} sm={3} md={3} key={index}>
            <Item key={item.id} item={item} removeItem={handleDeleteItem}  handleToggleCheck={handleToggleCheck}/>
          </Grid>
        ))}
      </Stack>
    </Container>
  )
}

export default PackingList