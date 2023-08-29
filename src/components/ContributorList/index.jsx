import { Grid, List, Paper, Typography } from "@mui/material";

import { customColor } from "../../style";

import Contributor from "../Contributor";

const ContributorList = ({ contributors, onSelectFriend, selectedFriend }) => {
  const handleOnSelectFriend = (frind) => {
    onSelectFriend(frind);
  };

  return (
    <Grid
      item
      minWidth={400}
      xs={8}
      sm={8}
      md={5}
      sx={{ background: customColor.amber.light }}
    >
      {contributors.length > 0 && (
        <>
          <Paper
            variant="outlined"
            sx={{
              padding: { xs: 2, sm: 2, md: 3, lg: 2 },
              background: customColor.blue.light,
            }}
          >
            <Typography
              variant="subtitle2"
              textAlign="center"
              sx={{
                background: customColor.orange.light,
                marginBottom: 1,
                borderRadius: 1,
                border: "0.7px dotted",
              }}
            >
              Friend List
            </Typography>
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
        </>
      )}
    </Grid>
  );
};

export default ContributorList;
