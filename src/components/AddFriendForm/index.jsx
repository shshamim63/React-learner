import { Stack, TextField, Button, Box } from "@mui/material";
import { useState } from "react";

const AddFriendForm = ({ addFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const submit = (e) => {
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
    setName("");
    setImage("https://i.pravatar.cc/48");
  };

  return (
    <Box sx={{ padding: 3 }}>
      <form onSubmit={submit}>
        <Stack
          spacing={2}
          sx={{ minWidth: 350, maxWidth: 450, margin: "auto", background: "" }}
        >
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
          <Box>
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
          </Box>
        </Stack>
      </form>
    </Box>
  );
};

export default AddFriendForm;
