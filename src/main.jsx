import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline, createTheme } from '@mui/material'
import InstrumentSans from './fonts/Instrument_Sans/InstrumentSans-VariableFont_wdth,wght.ttf'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#e7983f'
    }
  },
  typography: {
    fontFamily: 'InstrumentSans',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'InstrumentSans';
          font-style: normal;
          src: local('Raleway'), local('Raleway-Regular'), url(${InstrumentSans}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
