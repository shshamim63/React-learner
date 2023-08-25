import { Stack, Typography, Button, Checkbox } from "@mui/material";

const Item = ({ item, removeItem, handleToggleCheck }) => {
  return (
    <Stack direction="row" useFlexGap flexWrap="wrap">
      <Checkbox
        checked={item.packed}
        onChange={() => handleToggleCheck(item.id)}
      />
      <Typography
        lineHeight={3}
        sx={{ textDecoration: item.packed ? "line-through" : "none" }}
      >
        {item.quantity} {item.description}
      </Typography>
      <Button onClick={() => removeItem(item.id)}>❌</Button>
    </Stack>
  );
};

export default Item;
