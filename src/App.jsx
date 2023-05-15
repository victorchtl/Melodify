import './App.css'
import * as Tone from 'tone'
import { Button, Container } from '@mui/material';
import SequencerDisplay from './components/SequencerDisplay'
import LaunchPads from './components/LaunchPads';


function App() {

  Tone.Transport.loop = true;
  Tone.Transport.loopStart = 0;
  Tone.Transport.loopEnd = "4m";
  Tone.Transport.bpm.value = 120

  Tone.start()

  const tStart = async () => {
    await Tone.start()
    Tone.Transport.start()
  }

  const tStop = () => {
    Tone.Transport.stop()
    // setPosition(null)
  }

  return (
    <Container maxWidth={'md'}>
      <SequencerDisplay />
      <Button variant='contained' onClick={tStart}>start</Button>
      <Button variant='contained' onClick={tStop}>stop</Button>
      <LaunchPads />
    </Container>
  )
}

export default App
