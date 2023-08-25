import { useState } from "react";

import { Grid, List, Button, Box } from "@mui/material";

import { customColor } from "../../style";

import Contributor from "../Contributor";
import AddFriendForm from "../AddFriendForm";

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

const ContributorList = () => {
  const [buttonVisibitity, setbuttonVisibility] = useState(true);
  return (
    <Grid minWidth={400} item xs={8} sm={5} md={5} lg={5}>
      <List>
        {friends && [
          ...friends.map((friend) => (
            <Contributor key={friend.id} user={friend}></Contributor>
          )),
        ]}
      </List>
      <Box marginTop={2}>
        {!buttonVisibitity && <AddFriendForm />}
        <Button
          size="medium"
          sx={{
            display: "flex",
            float: "right",
            marginTop: 2,
            color: customColor.grey.deep,
            backgroundColor: customColor.orange.deep,
          }}
          onClick={(e) => setbuttonVisibility(!buttonVisibitity)}
        >
          {buttonVisibitity ? "Add Friend" : "Close"}
        </Button>
      </Box>
    </Grid>
  );
};

export default ContributorList;
