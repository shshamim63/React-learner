import { Grid, TextField, Typography, Stack, Paper } from "@mui/material";
import { customColor } from "../../style";

const SplitBillForm = () => {
  return (
    <Grid item minWidth={400} xs={8} sm={5} md={5} lg={5}>
      <Paper elevation={4}>
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
          </Stack>
        </form>
      </Paper>
    </Grid>
  );
};

export default SplitBillForm;
