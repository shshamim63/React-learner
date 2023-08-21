import { Stack, Typography, Button, Checkbox } from "@mui/material"

const calculateCheckedProperty = (checked) => {
  if (checked) {
    return {
      textDecoration: 'line-through'
    }
  }
}

const Item = ({item, removeItem, handleToggleCheck}) => {
  return (
    <Stack direction="row" useFlexGap flexWrap="wrap">
      <Checkbox checked={item.packed} onChange={() => handleToggleCheck(item.id)} />
      <Typography sx={{...calculateCheckedProperty(item.packed), height: 'auto', lineHeight: 3}}>{item.quantity}  {item.description}</Typography>
      <Button onClick={() => removeItem(item.id)}>❌</Button>
    </Stack>
  )
}

export default Item