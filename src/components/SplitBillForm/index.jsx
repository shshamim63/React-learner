import {
  Grid,
  TextField,
  Typography,
  Stack,
  Paper,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Button,
  Box,
} from "@mui/material";
import { useState } from "react";

const SplitBillForm = ({ contributors, selectedFriend, onSplitBill }) => {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const currentContributors = selectedFriend
    ? ["user", selectedFriend.name]
    : ["user"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : paidByUser * -1);
  };

  return (
    <Grid item minWidth={400} xs={8} sm={5} md={5} lg={5}>
      <Paper elevation={4} sx={{ minHeight: 350 }}>
        <Typography variant="h5" textAlign="center" marginTop={1}>
          {`Split a bill with ${selectedFriend.name}`}
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack
            spacing={2}
            sx={{
              minWidth: 350,
              maxWidth: 450,
              margin: "auto",
              background: "",
            }}
          >
            <TextField
              id="total"
              label="Total Bill"
              size="small"
              variant="outlined"
              value={bill}
              onChange={(e) =>
                setBill(Number(e.target.value) ? Number(e.target.value) : "")
              }
            />
            <TextField
              id="expense"
              label="Expense"
              size="small"
              variant="outlined"
              value={paidByUser}
              onChange={(e) =>
                setPaidByUser(
                  Number(e.target.value) > bill
                    ? paidByUser
                    : Number(e.target.value)
                )
              }
            />
            <Stack
              direction="row"
              justifyContent="space-between"
              value={whoIsPaying}
            >
              <Typography variant="subtitle2" lineHeight={3}>
                {selectedFriend.name}'s expense:
              </Typography>
              <TextField
                size="small"
                disabled
                id="indivitual-expense"
                value={paidByFriend}
              />
            </Stack>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="bill-payer">Bill Payer</InputLabel>
              <Select
                labelId="bill-payer"
                id="bill-payer"
                size="small"
                onChange={(e) => setWhoIsPaying(e.target.value)}
              >
                {currentContributors.map((contributor) => (
                  <MenuItem key={contributor} value={contributor}>
                    {contributor}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Box>
              <Button
                type="submit"
                size="small"
                variant="contained"
                sx={{ display: "flex", float: "right" }}
              >
                Split Bill
              </Button>
            </Box>
          </Stack>
        </form>
      </Paper>
    </Grid>
  );
};

export default SplitBillForm;
