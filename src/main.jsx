import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline, createTheme } from '@mui/material'
import RobotoFlex from './fonts/Roboto_Flex/RobotoFlex-VariableFont_GRAD,XTRA,YOPQ,YTAS,YTDE,YTFI,YTLC,YTUC,opsz,slnt,wdth,wght.ttf'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Beat from './pages/Beat.jsx'
import Groove from './pages/Groove.jsx'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#e7983f'
    },
    secondary: {
      main: '#121212'
    }
  },
  typography: {
    fontFamily: 'Roboto',
    h1: {
      fontWeight: 700
    },
    h2: {
      fontWeight: 700
    },
    body1: {
      fontSize: '.8rem',
      fontWeight: '100',
      letterSpacing: '.05rem',
      lineHeight: '1.3rem'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          src: local('Roboto'), local('Roboto-Regular'), url(${RobotoFlex}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/beat",
        element: <Beat />,
      },
      {
        path: "/groove",
        element: <Groove />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <RouterProvider router={router} />
  </ThemeProvider>
  // </React.StrictMode>,
)
