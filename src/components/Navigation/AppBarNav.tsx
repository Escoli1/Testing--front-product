import { Box, Button, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Link from 'next/link';

function AppBarNav() {
  return (
   <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Página de Productos
          </Typography>
          <Link href="/login">
            <Button color="secondary" variant='contained'>Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
   </>
  )
}

export default AppBarNav