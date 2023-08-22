import { Container, Typography } from "@mui/material"

const Status = ({items}) => {
  const numItems = items.length
  if (!numItems) {
    return ( 
      <Container maxWidth='md' sx={{height: 80, background: 'teal'}}>
        <Typography variant="subtitle2" color="textSecondary" align="center" lineHeight={6}>Start Addinng some items to your list</Typography>    
      </Container>
    )
  }
  const packedItemsNum = items.filter(item => item.packed === true).length
  return (
    <Container maxWidth='lg' sx={{height: 80, background: 'teal'}}>
      {numItems && (
        <Typography variant="subtitle2" color="textSecondary" align="center" lineHeight={6}>{numItems === packedItemsNum ? 'You have everything ready to go' : `You have ${numItems} items on your list, and you already packed ${packedItemsNum}`}</Typography>
      )}
    </Container>
  )
}

export default Status