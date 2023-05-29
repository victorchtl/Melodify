import './App.css'
import { Container } from '@mui/material';
import { Outlet } from 'react-router';
import Appbar from './components/shared/Appbar';


function App() {

  return (
    <>
      <Appbar />
      <Container maxWidth={'xl'}>
        <Outlet />
      </Container>
    </>
  )
}

export default App
