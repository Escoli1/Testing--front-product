import { Box, Grid, Typography } from "@mui/material";

export default function Page() {
  return (
    <main>
      <Grid container spacing={2} marginTop={5}>
        <Grid item xs={false} md={1}></Grid>
        <Grid xs={10} md={10}>
          <Box sx={{  display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Grid container direction="column" justifyContent="center" alignItems="center" spacing={2}>
              <Grid item>
                <Typography style={{ color: 'blue' }} variant="h3">Modulo 5 Aseguramiento de calidad
y pruebas E2E </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h4">Lidia Escobar Alanoca</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5">Práctica Final- Cypress</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={false} md={1}></Grid> 
      </Grid>
    </main>
  );
}