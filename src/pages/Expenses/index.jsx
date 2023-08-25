import { useState } from "react";
import { Grid } from "@mui/material";

import ContributorList from "../../components/ContributorList";
import SplitBillForm from "../../components/SplitBillForm";

const Expenses = () => {
  const [contributors, setContributors] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleOnSelectFriend = (friend) => {
    console.log(selectedFriend && selectedFriend.id === friend.id);
    if (selectedFriend && selectedFriend.id === friend.id) {
      setSelectedFriend(null);
    } else {
      setSelectedFriend(friend);
    }
  };

  const handleOnAddContributor = (user) => {
    setContributors([...contributors, user]);
  };

  return (
    <Grid container justifyContent="space-around" marginTop={4}>
      <ContributorList
        contributors={contributors}
        addContributors={handleOnAddContributor}
        OnSelectFriend={handleOnSelectFriend}
        selectedFriend={selectedFriend}
      />
      {selectedFriend && <SplitBillForm contributors={contributors} />}
    </Grid>
  );
};

export default Expenses;
