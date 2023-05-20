import { Box, Slider, Typography } from "@mui/material"
import * as Tone from 'tone'
import { useState } from "react"

function TransportBpmControl() {

    const [bpm, setBpm] = useState(Tone.Transport.bpm.value)

    const updateBpm = (newVal) => {
        Tone.Transport.bpm.value = newVal
        setBpm(newVal)
    }

    return (
        <Box display={'flex'} width={'100%'} alignItems={'center'}>
            <Slider
                aria-label="Transport Bpm"
                size="small"
                min={30}
                max={300}
                step={1}
                value={bpm}
                onChange={(e) => updateBpm(e.target.value)}
                sx={{width:'fit', marginLeft:'20px'}}
            />
            <Typography textAlign={'center'} width={'fit'} color={'text.secondary'} ml={2}>{bpm}</Typography>
            <Typography textAlign={'center'} width={'fit'} color={'text.secondary'} ml={1}>bpm</Typography>
        </Box>
    )
}

export default TransportBpmControl