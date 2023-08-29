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
} from "@mui/material";
import { useState } from "react";
import { customColor } from "../../style";

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
    console.log(bill, paidByUser);
    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : paidByUser * -1);
  };

  return (
    <Grid
      item
      xs={8}
      sm={5}
      md={5}
      lg={5}
      sx={{ background: customColor.blue.light }}
    >
      <Paper elevation={4} sx={{ background: customColor.amber.light }}>
        <Typography
          variant="h6"
          textAlign="center"
          minHeight={40}
          lineHeight={2}
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".1rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Split a bill with{" "}
          <Typography variant="outlined" color={customColor.orange.deep}>
            {selectedFriend.name}
          </Typography>
        </Typography>
      </Paper>
      <Paper
        elevation={4}
        sx={{ background: customColor.amber.light, margin: 1, padding: 1 }}
      >
        <form onSubmit={handleSubmit}>
          <Stack
            spacing={1}
            sx={{
              minWidth: 350,
              minHeight: 220,
            }}
          >
            <TextField
              id="total"
              label="Total Bill"
              size="small"
              variant="outlined"
              value={bill}
              sx={{ marginTop: 1 }}
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
                value={whoIsPaying}
                onChange={(e) => setWhoIsPaying(e.target.value)}
              >
                {currentContributors.map((contributor, index) => (
                  <MenuItem key={contributor} value={contributor}>
                    {contributor}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
          <Grid container justifyContent="flex-end">
            <Button
              type="submit"
              sx={{
                color: customColor.amber.deep,
                backgroundColor: customColor.blue.secondary,
                width: { sm: 80, md: 100, lg: 120 },
                height: { sm: 30, md: 35, lg: 40 },
                fontSize: { sm: 10, md: 12, lg: 14 },
                fontWeight: 800,
              }}
              variant="contained"
            >
              Split Bill
            </Button>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
};

export default SplitBillForm;
