import './App.css'
import * as Tone from 'tone'
import { Container } from '@mui/material';
import SequencerDisplay from './components/SequencerDisplay'
import LaunchPads from './components/LaunchPads';
import TransportControls from './components/TransportControls';
import Text from './components/Text';


function App() {

  Tone.start()

  return (
    <Container maxWidth={'md'}>
      <Text />
      <SequencerDisplay />
      <LaunchPads />
      <TransportControls />
    </Container>
  )
}

export default App
