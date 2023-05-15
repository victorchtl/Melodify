import { Grid } from '@mui/material'
import Player from './Player'
import guitar from '../assets/guitar.wav'
import synth from '../assets/synth.wav'
import drums from '../assets/drums.wav'

function LaunchPads() {

    const samples = [
        {
            name: 'guitar',
            url: guitar,
            bpm: 120
        },
        {
            name: 'synth',
            url: synth,
            bpm: 120
        },
        {
            name: 'drums',
            url: drums,
            bpm: 125
        }
    ]

    return (
        <Grid container spacing={1}>
            {samples.map((sample, index) => (
                <Grid item key={sample.name + index} xs={3}>
                    <Player url={sample.url} bpm={sample.bpm} />
                </Grid>
            ))}
        </Grid>
    )
}

export default LaunchPads