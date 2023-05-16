import { Grid } from '@mui/material'
import Player from './Player'
import guitar from '../assets/guitar.wav'
import synth from '../assets/synth.wav'
import voice from '../assets/voice.wav'
import drums from '../assets/drums.wav'
import bass from '../assets/bass.wav'

function LaunchPads() {

    const samples = [
        {
            name: 'drums',
            url: drums,
            bpm: 128
        },
        {
            name: 'bass',
            url: bass,
            bpm: 128
        },
        {
            name: 'synth',
            url: synth,
            bpm: 128
        },
        {
            name: 'guitar',
            url: guitar,
            bpm: 128
        },
        {
            name: 'voice',
            url: voice,
            bpm: 128
        },
    ]

    return (
        <Grid container spacing={1}>
            {samples.map((sample, index) => (
                <Grid item key={sample.name + index} xs={12/5}>
                    <Player url={sample.url} bpm={sample.bpm} />
                </Grid>
            ))}
        </Grid>
    )
}

export default LaunchPads