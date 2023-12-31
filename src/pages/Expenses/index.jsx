import { useState, useEffect } from "react";
import { Grid, Paper, Typography, Button, Stack } from "@mui/material";

import ContributorList from "../../components/ContributorList";
import AddFriendForm from "../../components/AddFriendForm";
import SplitBillForm from "../../components/SplitBillForm";
import { customColor } from "../../style";

const Expenses = ({ title }) => {
  const [contributors, setContributors] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [showForm, setshowForm] = useState(false);

  const updateFormVisibility = (status) => {
    if (selectedFriend) return;
    setshowForm(status);
  };

  const handleOnSelectFriend = (friend) => {
    if (selectedFriend && selectedFriend.id === friend.id) {
      setSelectedFriend(null);
    } else {
      setSelectedFriend(friend);
    }
  };

  const handleOnAddContributor = (user) => {
    setContributors([...contributors, user]);
  };

  const handleSplitBill = (value) => {
    setContributors((contributors) =>
      contributors.map((contributor) =>
        contributor.id === selectedFriend.id
          ? { ...contributor, balance: contributor.balance + value }
          : contributor
      )
    );
    setSelectedFriend(null);
  };

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <Paper
        elevation={3}
        sx={{
          maxWidth: "sm",
          margin: "auto",
          height: 100,
          mt: 4,
          background: customColor.amber.light,
        }}
      >
        <Stack>
          <Typography align="center" lineHeight={3}>
            Click here to add some friend
          </Typography>
          <Button
            sx={{
              margin: "auto",
              color: customColor.grey.deep,
              backgroundColor: customColor.orange.deep,
              width: { sm: 80, md: 100, lg: 120 },
              height: { sm: 30, md: 35, lg: 40 },
              fontSize: { sm: 10, md: 12, lg: 14 },
              fontWeight: 800,
            }}
            onClick={(e) => updateFormVisibility(true)}
          >
            Add Friend
          </Button>
        </Stack>
      </Paper>

      {
        <AddFriendForm
          addFriend={handleOnAddContributor}
          showForm={showForm}
          updateFormVisibility={updateFormVisibility}
        />
      }
      <Grid container justifyContent="space-evenly" marginTop={4}>
        <ContributorList
          contributors={contributors}
          addContributors={handleOnAddContributor}
          onSelectFriend={handleOnSelectFriend}
          selectedFriend={selectedFriend}
        />
        {selectedFriend && (
          <SplitBillForm
            contributors={contributors}
            selectedFriend={selectedFriend}
            onSplitBill={handleSplitBill}
            key={selectedFriend.id}
          />
        )}
      </Grid>
    </>
  );
};

export default Expenses;
