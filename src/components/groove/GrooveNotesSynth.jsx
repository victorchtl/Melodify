import { Box, Typography } from '@mui/material'
import * as Tone from 'tone'
import { useRef, useState } from 'react';
import SynthPad from '../shared/SynthPad';
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';


function GrooveNotesSynth() {

    const notes = ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B']

    const [octave, setOctave] = useState(3)

    const synthRef = useRef(new Tone.Synth().toDestination())

    const playNote = async (note) => {
        await Tone.start()
        if (note.length < 2) synthRef.current.triggerAttackRelease(`${note}${octave}`, "8n");
        else synthRef.current.triggerAttackRelease(`${note.substring(0, 2)}${octave}`, "8n");
    }

    const updateOctave = (dir) => {
        const currentOctave = octave
        if (dir === 'next' & currentOctave < 9) setOctave(currentOctave + 1)
        else if (dir === 'prev' & currentOctave > 1) setOctave(currentOctave - 1)
    }

    return (
        <>
        <Typography variant='body1' textAlign={'center'} mb={2}>Octave : {octave}</Typography>
            <Box display={'flex'}>
                <Box onClick={() => updateOctave('prev')} display={'flex'} alignItems={'center'} mr={3} sx={{ cursor: 'pointer' }}>
                    <NavigateBeforeRoundedIcon />
                </Box>
                <Box
                    width={'100%'}
                    display={'grid'}
                    gridTemplateRows={`repeat(2), 1fr`}
                    gridTemplateColumns={`repeat(${notes.filter((str) => str.length < 2).length * 2}, 1fr)`}
                    gap={'.1rem'}
                >
                    {notes.map((note) => {
                        let newIndex
                        if (note.length > 1) newIndex = (notes.filter((str) => str.length < 2).indexOf(note.substring(0, 1))) + 1
                        else newIndex = notes.filter((str) => str.length < 2).indexOf(note)
                        return (
                            <Box
                                key={note}
                                gridRow={note.length > 1 ? '1 / 2' : '2 / 3'}
                                gridColumn={
                                    note.length > 1 ?
                                        `${(newIndex * 2)} / ${(newIndex * 2) + 2}`
                                        :
                                        `${(newIndex * 2) + 1} / ${(newIndex * 2) + 3}`
                                }
                            >
                                <SynthPad onClick={() => playNote(note)} text={note + octave} />
                            </Box>

                        )
                    })}
                </Box>
                <Box onClick={() => updateOctave('next')} display={'flex'} alignItems={'center'} ml={3} sx={{ cursor: 'pointer' }}>
                    <NavigateNextRoundedIcon />
                </Box>
            </Box>
        </>
    )
}

export default GrooveNotesSynth