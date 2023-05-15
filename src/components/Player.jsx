/* eslint-disable react/prop-types */
import { Box } from '@mui/material'
import { useRef, useState } from 'react'
import * as Tone from 'tone'

function Player({url, bpm}) {

    const [isPlayer, setIsPlayer] = useState(false)

    const [isLoading, setIsLoading] = useState(false)

    const player = useRef(
        new Tone.Player({
            url: url,
            loop: true,
            playbackRate: Tone.Transport.bpm.value / bpm,
        }).toDestination()
    )

    const startPlayer = () => {
        if (!isPlayer) {
            if (Tone.Transport.state === 'stopped') {
                Tone.start()
                Tone.Transport.start();
            }
            setIsLoading(true)
            Tone.Transport.scheduleOnce(() => {
                setIsPlayer(true)
                setIsLoading(false)
                player.current.sync().start();
            }, '0');
        }
        else {
            player.current.unsync().stop()
            setIsPlayer(false)
        }
    }

    return (
        <Box
            width={'100%'}
            bgcolor={isPlayer ? 'primary.main' : 'grey'}
            onClick={startPlayer}
            sx={{
                aspectRatio:'1',
                animation: isLoading
                    ? `brightnessLoop .5s linear infinite`
                    : 'none',
                '@keyframes brightnessLoop': {
                    '0%': { filter: 'brightness(100%)' },
                    '50%': { filter: 'brightness(50%)' },
                    '100%': { filter: 'brightness(100%)' },
                },
            }}
        />
    )
}

export default Player