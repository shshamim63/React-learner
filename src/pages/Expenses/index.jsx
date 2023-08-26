import { useState } from "react";
import { Grid } from "@mui/material";

import ContributorList from "../../components/ContributorList";
import SplitBillForm from "../../components/SplitBillForm";

const Expenses = () => {
  const [contributors, setContributors] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState(null);

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
  return (
    <Grid container justifyContent="space-around" marginTop={4}>
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
        />
      )}
    </Grid>
  );
};

export default Expenses;
