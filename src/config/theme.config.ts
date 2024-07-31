'use client'

import { createTheme } from '@mui/material'

export const themeProviderConfig = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#969696',
    },
    background: {
      default: '#1b1b1f',
    },
    text: {
      primary: '#fff',
      secondary: '#fff'
    }
  },
  typography: {
    fontFamily: 'varela-round-regular',
    h1: {
      fontSize: '2.25rem',
      fontWeight: 600,
    },
    h2: {
        fontSize: '1.9rem',
        fontWeight: 600,
    },
    h3: {
        fontSize: '1.6rem',
        fontWeight: 600,
    },
    h4: {
        fontSize: '1.4rem',
        fontWeight: 600,
    },
    h5: {
        fontSize: '1.3rem',
        fontWeight: 600,
    },
    h6: {
        fontSize: '1rem',
        fontWeight: 600,
    },
  },
})