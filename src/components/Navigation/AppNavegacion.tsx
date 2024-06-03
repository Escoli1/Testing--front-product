"use"
import { Box, Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

function AppNavegacion() {
  return (
    <Box display="flex">
        <Box mr={1}>
            <Link href="/" passHref>
                <Button color="warning" variant="contained">Home</Button>
            </Link>
        </Box>
        <Box mr={1}>
        <Link href="/products" passHref>
            <Button color="warning" variant="contained">Productos</Button>
        </Link>
        </Box>
        <Box ml={1}>
        <Link href="/login" passHref>
            <Button color="warning" variant="contained">Login</Button>
        </Link>
        </Box>
  </Box>
  )
}

export default AppNavegacion