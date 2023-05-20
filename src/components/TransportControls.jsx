import { Box, IconButton, Slider } from '@mui/material';
import * as Tone from 'tone'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';
import StopRoundedIcon from '@mui/icons-material/StopRounded';
import { useEffect, useState } from 'react';
import { useStore } from '../store';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import VolumeOffRoundedIcon from '@mui/icons-material/VolumeOffRounded';

function TransportControls() {

    Tone.Transport.loop = true;
    Tone.Transport.loopStart = 0;
    Tone.Transport.loopEnd = "4m";
    Tone.Transport.bpm.value = 128

    const store = useStore()

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
        <Box 
        mt={1}
        display={'flex'}
        justifyContent={'space-between'}
        >

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

            <Box display={'flex'} alignItems={'center'}>
                <IconButton aria-label="volumeMute" size="small" onClick={store.toggleMute}>
                    {store.volumeNode.mute ?
                        <VolumeOffRoundedIcon />
                        :
                        <VolumeUpRoundedIcon />
                    }
                </IconButton>
                <Slider
                    aria-label="Volume"
                    min={-60}
                    max={0}
                    value={store.volumeNode.volume.value}
                    onChange={(e) => store.setVolume(e.target.value)}
                    size='small'
                    sx={{width:'50px', color:'white'}}
                />
            </Box>
        </Box>
    )
}

export default TransportControls