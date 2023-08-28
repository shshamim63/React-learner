import {
  Stack,
  TextField,
  Button,
  Box,
  Modal,
  Typography,
} from "@mui/material";
import { useState } from "react";

import { modalContainerstyle } from "./style";

const AddFriendForm = ({ addFriend, showForm, updateFormVisibility }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const closeModal = () => {
    updateFormVisibility(false);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!name && !image) return null;
    const id = crypto.randomUUID();
    const newFriend = {
      name,
      image: `${image}?u=${id}`,
      balance: 0,
      id,
    };
    addFriend(newFriend);
    updateFormVisibility(false);
    setName("");
    setImage("https://i.pravatar.cc/48");
  };

  return (
    <Modal open={showForm} onClose={closeModal}>
      <Box sx={modalContainerstyle}>
        <form onSubmit={handleOnSubmit}>
          <Stack spacing={2}>
            <TextField
              value={name}
              id="name"
              label="Name"
              size="small"
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              value={image}
              id="image-url"
              label="Image"
              size="small"
              variant="outlined"
              onChange={(e) => setImage(e.target.value)}
            />
            <Button
              sx={{
                width: 150,
                display: "flex",
                float: "right",
                background: "red.main",
              }}
              type="submit"
              size="medium"
              variant="contained"
            >
              Add
            </Button>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
};

export default AddFriendForm;
