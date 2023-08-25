import { Grid } from "@mui/material";
import ContributorList from "../../components/ContributorList";
import SplitBillForm from "../../components/SplitBillForm";

const Expenses = () => {
  return (
    <Grid container justifyContent="space-around" marginTop={4}>
      <ContributorList />
      <SplitBillForm />
    </Grid>
  );
};

export default Expenses;
