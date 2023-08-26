import { useState } from "react";

import { Grid, List, Button, Box, Paper } from "@mui/material";

import { customColor } from "../../style";

import Contributor from "../Contributor";
import AddFriendForm from "../AddFriendForm";

const ContributorList = ({
  contributors,
  addContributors,
  onSelectFriend,
  selectedFriend,
}) => {
  const [formVisibitity, setFormVisibility] = useState(false);

  const handleOnSelectFriend = (frind) => {
    setFormVisibility(false);
    onSelectFriend(frind);
  };

  return (
    <Grid item minWidth={400} xs={8} sm={5} md={5} lg={5}>
      {contributors.length > 0 && (
        <Paper variant="outlined" sx={{ padding: { lg: 10, md: 5 } }}>
          <List>
            {contributors && [
              ...contributors.map((friend) => (
                <Contributor
                  key={friend.id}
                  user={friend}
                  handleOnSelectFriend={handleOnSelectFriend}
                  selectedFriend={selectedFriend}
                ></Contributor>
              )),
            ]}
          </List>
        </Paper>
      )}
      <Box marginTop={2}>
        {formVisibitity && <AddFriendForm addFriend={addContributors} />}
        <Button
          size="medium"
          sx={{
            display: "flex",
            float: "right",
            marginTop: 2,
            color: customColor.grey.deep,
            backgroundColor: customColor.orange.deep,
          }}
          onClick={(e) => setFormVisibility(!formVisibitity)}
        >
          {formVisibitity ? "Close" : "Add Friend"}
        </Button>
      </Box>
    </Grid>
  );
};

export default ContributorList;
