import { Box, Typography } from "@mui/material"

const Status = ({items}) => {
  const numItems = items.length
  if (!numItems) {
    return ( 
      <Box sx={{width: '100%', height: 60, background: 'teal', position: 'fixed', bottom: 0}}>
        <Typography variant="subtitle2" color="textSecondary" align="center" lineHeight={4.5}>Start Addinng some items to your list</Typography>    
      </Box>
    )
  }
  const packedItemsNum = items.filter(item => item.packed === true).length
  return (
    <Box sx={{width: '100%', height: 60, background: 'teal', position: 'fixed', bottom: 0}}>
      {numItems && (
        <Typography variant="subtitle2" color="textSecondary" align="center" lineHeight={4.5}>{numItems === packedItemsNum ? 'You have everything ready to go' : `You have ${numItems} items on your list, and you already packed ${packedItemsNum}`}</Typography>
      )}
    </Box>
  )
}

export default Status