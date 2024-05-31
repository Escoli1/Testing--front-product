import AppBarNav from "@/components/Navigation/AppBarNav";
import TableProductFree from "@/components/Table/TableProductFree";
import { Grid } from "@mui/material";

export default function Page() {


  return (
    <main>
      <AppBarNav />
      <Grid container spacing={2} marginTop={5}>
        <Grid item xs={false} md={1}></Grid>
        <Grid xs={10} md={10}>
          <TableProductFree />
        </Grid>
        <Grid item xs={false} md={1}></Grid> 
      </Grid>
    </main>
  );
}