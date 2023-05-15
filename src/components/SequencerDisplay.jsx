import { Box, useTheme } from '@mui/material';
import { useEffect, useRef, useState } from 'react'
import * as Tone from 'tone'

function SequencerDisplay() {

    const [position, setPosition] = useState(null);

    const beat = new Array(16).fill('');

    const transportPositionRef = useRef(null);

    const theme = useTheme()

    useEffect(() => {

        const handleTransportPosition = () => {
            const pos = parseInt(Tone.Transport.position.split(':')[0] * 4) + parseInt(Tone.Transport.position.split(':')[1])
            setPosition(pos);
        };

        transportPositionRef.current = handleTransportPosition;

        Tone.Transport.scheduleRepeat(transportPositionRef.current, '4n');

        return () => {
            Tone.Transport.clear(transportPositionRef.current);
        };
    }, []);

    useEffect(() => {
        const handleTransportStop = () => {
            setPosition(null);
        };

        Tone.Transport.on('stop', handleTransportStop);

        return () => {
            Tone.Transport.off('stop', handleTransportStop);
        };
    }, []);

    return (
        <>
            <Box display={'flex'}>
                {beat.map((b, index) => (
                    <Box
                        key={index}
                        width={'50px'}
                        height={'10px'}
                        borderRadius={'3px'}
                        bgcolor={position === index ? 'primary.main' : 'rgba(0, 0, 0, .3)'}
                        m={1}
                        sx={{
                            boxShadow: position === index ?
                                `0 0 8px 1px ${theme.palette.primary.main}`
                                :
                                'rgba(0, 0, 0, 1) 1px 2px 1px 0px inset'
                        }}
                    />
                ))}
            </Box>
        </>
    )
}

export default SequencerDisplay