import './App.css'
import * as Tone from 'tone'
import { Container } from '@mui/material';
import SequencerDisplay from './components/SequencerDisplay'
import LaunchPads from './components/LaunchPads';
import TransportControls from './components/TransportControls';
import Landing from './pages/Landing';
import Beat from './pages/Beat';
import { useEffect } from 'react';


function App() {

  return (
    <Container maxWidth={'xl'}>
      <Landing />
      <Beat />
      {/* <Landing />
      <SequencerDisplay />
      <LaunchPads />
      <TransportControls /> */}
    </Container>
  )
}

export default App
