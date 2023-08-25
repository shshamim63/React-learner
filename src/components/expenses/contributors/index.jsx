import { Grid, List, Button, Box } from "@mui/material";

import User from "../user";
import AddFriendForm from "../addFriendForm";
import { useState } from "react";

const friends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const Contributors = () => {
  const [buttonVisibitity, setbuttonVisibility] = useState(true);
  return (
    <Grid minWidth={400} item xs={8} sm={5} md={5} lg={5}>
      <List>
        {friends && [
          ...friends.map((friend) => (
            <User key={friend.id} user={friend}></User>
          )),
        ]}
      </List>
      <Box marginTop={2}>
        {buttonVisibitity && (
          <Button
            size="medium"
            variant="contained"
            sx={{ display: "flex", float: "right" }}
            onClick={(e) => setbuttonVisibility(!buttonVisibitity)}
          >
            Add Friend
          </Button>
        )}
        {!buttonVisibitity && <AddFriendForm />}
        {buttonVisibitity && (
          <Button
            size="medium"
            variant="contained"
            sx={{ display: "flex", float: "right" }}
            onClick={(e) => setbuttonVisibility(!buttonVisibitity)}
          >
            Add Friend
          </Button>
        )}
      </Box>
    </Grid>
  );
};

export default Contributors;
