import { Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

function AppTitulo() {
  return (
    <>
      <Link href='/' style={{ textDecoration: 'none' }} >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color='white'>
          Página Principal
        </Typography>
      </Link>

    </>
  )
}

export default AppTitulo