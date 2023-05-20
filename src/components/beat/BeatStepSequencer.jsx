import { useRef, useState } from 'react'
import * as Tone from 'tone'
import kick from '../../assets/drums/kick.wav'
import snare from '../../assets/drums/snare.wav'
import clap from '../../assets/drums/clap.wav'
import hithat_closed from '../../assets/drums/hithat_closed.wav'
import hithat_open from '../../assets/drums/hithat_open.wav'
import cymbal from '../../assets/drums/cymbal.wav'
import { Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import StopRoundedIcon from '@mui/icons-material/StopRounded';
import RestartAltRoundedIcon from '@mui/icons-material/RestartAltRounded';
import TransportBpmControl from '../shared/TransportBpmControl'
import { basic } from '../../presets/DrumsPresets'

function BeatStepSequencer() {

    const [rows, setRows] = useState(new Array(6).fill(new Array(16).fill(0)))

    const rowsRef = useRef(new Array(6).fill(new Array(16).fill(0)))

    const [currentCol, setCurrentCol] = useState(null)

    const playerNames = ["kick", "snare", "clap", "hithat_closed", "hithat_open", "cymbal"].reverse();

    const playerNamesDisplay = ["kick", "snare", "clap", "hit hat closed", "hi that open", "cymbal"].reverse();

    const sequenceRef = useRef(new Tone.Sequence((time, index) => {

        setCurrentCol(index)
        for (let i = 0; i < playerNames.length; i++) {
            if (rowsRef.current[i][index] === 1) {
                players.player(playerNames[i]).start(time)
            }
        }
    }, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]))

    const players = new Tone.Players({
        urls: {
            kick: kick,
            snare: snare,
            clap: clap,
            hithat_closed: hithat_closed,
            hithat_open: hithat_open,
            cymbal: cymbal,
        }
    }).toDestination()


    const playSequence = async () => {
        await Tone.start()
        sequenceRef.current.start(0)
        Tone.Transport.start()
    }

    const stopSequence = () => {
        sequenceRef.current.cancel()
        Tone.Transport.stop()
        setCurrentCol(null)
    }

    const clearSequence = () => {
        const clearedRows = new Array(6).fill(new Array(16).fill(0))
        setRows(clearedRows)
        setPreset('')
        rowsRef.current = clearedRows
    }

    const toggleSequencePlayer = (indexRow, indexCol) => {
        const updatedSeq = [...rows];
        const updatedSeqRow = [...updatedSeq[indexRow]]
        if (updatedSeqRow[indexCol] === 0) updatedSeqRow[indexCol] = 1
        else updatedSeqRow[indexCol] = 0
        updatedSeq[indexRow] = updatedSeqRow
        setRows(updatedSeq)
        setPreset('')
        rowsRef.current = updatedSeq
    }

    const [preset, setPreset] = useState('')

    const presets = [
        {
            name: 'basic',
            preset: basic
        }
    ]

    const setPresetToSequence = (preset) => {
        setRows(preset)
        setPreset(preset)
        rowsRef.current = preset
    }

    return (
        <Container maxWidth='md'>
            <Stack direction={'row'} spacing={1} mb={1}>
                <Button variant='outlined' size='small' onClick={playSequence}><PlayArrowRoundedIcon /></Button>
                <Button variant='outlined' size='small' onClick={stopSequence}><StopRoundedIcon /></Button>
                <Button variant='outlined' size='small' onClick={clearSequence}><RestartAltRoundedIcon /></Button>
                <FormControl sx={{ m: 1, minWidth: 100 }}>
                    <InputLabel id="select-label">Presets</InputLabel>
                    <Select
                        labelId="select-label"
                        id="select"
                        value={preset}
                        label="Presets"
                        onChange={(e) => setPresetToSequence(e.target.value)}
                    >
                        {presets.map((preset, index) => (
                            <MenuItem key={index} value={preset.preset}>{preset.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TransportBpmControl />
            </Stack>
            <Box bgcolor={'secondary.dark'} p={2} borderRadius={'.5rem'}>
                <Grid container spacing={1}>
                    {rows.map((sequence, indexRow) => (
                        <Grid item key={indexRow} xs={12}>
                            <Grid container spacing={1}>
                                <Grid item xs={1} textAlign={'center'} justifyContent={'center'} alignItems={'center'} sx={{ display: { xs: 'none', md: 'flex' } }}>
                                    <Typography fontSize={'.7rem'} lineHeight={1.4} color={'text.secondary'}>
                                        {playerNamesDisplay[indexRow]}
                                    </Typography>
                                </Grid>
                                {sequence.map((kick, indexCol) => (
                                    <Grid item key={indexCol} xs>
                                        <Box
                                            onClick={() => toggleSequencePlayer(indexRow, indexCol)}
                                            width={'100%'}
                                            bgcolor={kick !== 0 ? 'primary.main' : 'secondary.light'}
                                            sx={{
                                                aspectRatio: '1',
                                                filter: currentCol === indexCol ? 'brightness(120%)' : 'none'
                                            }}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    )
}

export default BeatStepSequencer