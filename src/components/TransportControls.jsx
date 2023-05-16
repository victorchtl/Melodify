import { Box, IconButton, Slider } from '@mui/material';
import * as Tone from 'tone'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';
import StopRoundedIcon from '@mui/icons-material/StopRounded';
import { useEffect, useState } from 'react';

function TransportControls() {

    Tone.Transport.loop = true;
    Tone.Transport.loopStart = 0;
    Tone.Transport.loopEnd = "4m";
    Tone.Transport.bpm.value = 128

    const [state, setState] = useState('stop')

    const tStartPause = async () => {
        switch (state) {
            case 'start':
                Tone.Transport.pause()
                setState('pause')
                break;
            case 'pause':
                Tone.Transport.start()
                setState('start')
                break;
            case 'stop':
                await Tone.start()
                Tone.Transport.start()
                setState('start')
                break;
            default:
                break;
        }
    }

    const tStop = () => {
        Tone.Transport.stop()
        setState('stop')
    }

    useEffect(() => {
        const handleTransportStateChange = (newState) => {
            setState(newState);
        };

        // Ajouter des écouteurs d'événements pour le state, la position et le BPM du transport
        Tone.Transport.on('start', () => handleTransportStateChange('start'));
        Tone.Transport.on('stop', () => handleTransportStateChange('stop'));
        Tone.Transport.on('pause', () => handleTransportStateChange('pause'));


        return () => {
            // Supprimer les écouteurs d'événements lorsque le composant est démonté
            Tone.Transport.off('start', handleTransportStateChange);
            Tone.Transport.off('stop', handleTransportStateChange);
            Tone.Transport.off('pause', handleTransportStateChange);
        };
    }, []);



    return (
        <Box mt={1}>

            <Box>
                <IconButton onClick={tStartPause}>
                    {state !== 'start' ?
                        <PlayArrowRoundedIcon />
                        :
                        <PauseRoundedIcon />
                    }
                </IconButton>
                <IconButton onClick={tStop}>
                    <StopRoundedIcon />
                </IconButton>
            </Box>

            <Box>
                {/* <Slider
                    aria-label="Volume"
                    step={.1}
                    min={-256}
                    max={0}
                /> */}
            </Box>
        </Box>
    )
}

export default TransportControls