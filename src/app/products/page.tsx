import TableProductFree from "@/components/Table/TableProductFree";
import { Grid, Typography  } from "@mui/material";
import Box from '@mui/material/Box';

function ProductPage() {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ marginTop: 40 }}>
      <Grid item xs={10} md={10}> 
        <Box sx={{ marginBottom : 5 }}>
          <Typography style={{ textAlign : 'center' }} variant="h5" >Lista de Productos</Typography>
        </Box>
        <TableProductFree />
      </Grid>
    </Grid>
  );
}

export default ProductPage;
