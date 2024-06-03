"use client"
import { Box, Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import AppTitulo from './AppTitulo';
import AppNavegacion from './AppNavegacion';

function AppBarNav() {

  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <AppTitulo />
            <AppNavegacion />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AppBarNav;
