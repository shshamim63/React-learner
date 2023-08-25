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

const SplitBillForm = ({ contributors }) => {
  return (
    <Grid item minWidth={400} xs={8} sm={5} md={5} lg={5}>
      <Paper elevation={4} sx={{ minHeight: 350 }}>
        <Typography variant="h5" textAlign="center" marginTop={1}>
          Split a bill X
        </Typography>
        <form>
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
            />
            <TextField
              id="expense"
              label="Expense"
              size="small"
              variant="outlined"
            />
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="subtitle2" lineHeight={3}>
                X's expense:
              </Typography>
              <TextField
                size="small"
                disabled
                id="indivitual-expense"
                defaultValue={0}
              />
            </Stack>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="bill-payer">Bill Payer</InputLabel>
              <Select labelId="bill-payer" id="bill-payer" size="small">
                {contributors.map((contributor) => (
                  <MenuItem key={contributor.id} value={contributor.id}>
                    {contributor.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Box>
              <Button
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
