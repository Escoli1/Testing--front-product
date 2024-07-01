"use"
import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

function AppNavegacion() {
  return (
    <Box display="flex">
        <Box mr={3}>
            <Link href="/">
                <Typography data-testid='page-home' variant="subtitle2" component="p" sx={{ flexGrow: 1 }} color='white'>
                    Home
                </Typography>
            </Link>
        </Box>
        <Box mr={3}>
        <Link href="/products" passHref>
            <Typography data-testid='page-productos'  variant="subtitle2" component="p" sx={{ flexGrow: 1 }} color='white'>
                Productos
            </Typography>
        </Link>
        </Box>
        <Box mr={5}>
        <Link href="/login" passHref>
            <Typography data-testid='page-login' variant="subtitle2" component="p" sx={{ flexGrow: 1 }} color='white'>
                Login
            </Typography>
        </Link>
        </Box>
  </Box>
  )
}

export default AppNavegacion