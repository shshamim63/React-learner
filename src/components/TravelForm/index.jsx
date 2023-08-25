import { useState } from "react";

import uuid from "react-uuid";

import {
  FormControl,
  Typography,
  TextField,
  MenuItem,
  Button,
  Grid,
  Stack,
  InputLabel,
  Select,
} from "@mui/material";
import AddCardIcon from "@mui/icons-material/AddCard";

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

const TravelForm = ({ addItem }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description && quantity > 0) return;
    const newItem = { description, quantity, packed: false, id: uuid() };
    setDescription("");
    setQuantity(1);
    addItem(newItem);
  };

  const handleOnChange = (e) => {
    setDescription(e.target.value);
  };

  const handleOnChangeQuantity = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <Grid
      container
      justifyContent="center"
      spacing={1}
      marginTop={1}
      marginBottom={5}
    >
      <Grid item md={5}>
        <Typography
          variant="subtitle2"
          color="textSecondary"
          align="right"
          lineHeight={4}
        >
          What would you like to bring to your trip? 😍
        </Typography>
      </Grid>
      <Grid item md={6}>
        <form onSubmit={handleSubmit}>
          <Stack direction="row" spacing={1} margin={1}>
            <FormControl>
              <InputLabel id="item-quantity">Quantity</InputLabel>
              <Select
                labelId="item-quantity"
                value={quantity}
                label="quantity"
                size="small"
                onChange={handleOnChangeQuantity}
                MenuProps={MenuProps}
                sx={{ width: 100 }}
              >
                {Array.from({ length: 20 }, (_, i) => i + 1).map((val) => (
                  <MenuItem key={val - 1} value={val}>
                    {val}
                  </MenuItem>
                ))}
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
            <Button
              type="submit"
              variant="contained"
              size="medium"
              endIcon={<AddCardIcon />}
            >
              Add
            </Button>
          </Stack>
        </form>
      </Grid>
    </Grid>
  );
};

export default TravelForm;
