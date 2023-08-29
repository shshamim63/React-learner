import { Grid, List, Paper } from "@mui/material";

import { customColor } from "../../style";

import Contributor from "../Contributor";

const ContributorList = ({ contributors, onSelectFriend, selectedFriend }) => {
  const handleOnSelectFriend = (frind) => {
    onSelectFriend(frind);
  };

  return (
    <Grid item minWidth={400} xs={8} sm={5} md={5} lg={5}>
      {contributors.length > 0 && (
        <Paper
          variant="outlined"
          sx={{
            padding: { lg: 5, md: 5, background: customColor.blue.light },
          }}
        >
          <List sx={{ background: customColor.orange.light }}>
            {contributors && [
              ...contributors.map((friend, index) => (
                <Contributor
                  key={friend.id}
                  user={friend}
                  index={index}
                  handleOnSelectFriend={handleOnSelectFriend}
                  selectedFriend={selectedFriend}
                ></Contributor>
              )),
            ]}
          </List>
        </Paper>
      )}
    </Grid>
  );
};

export default ContributorList;
