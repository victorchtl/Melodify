import { Box, Grid, Typography } from '@mui/material'
import * as Tone from 'tone'
import kick from '../../assets/drums/kick.wav'
import snare from '../../assets/drums/snare.wav'
import clap from '../../assets/drums/clap.wav'
import hithat_open from '../../assets/drums/hithat_open.wav'
import hithat_closed from '../../assets/drums/hithat_closed.wav'
import cymbal from '../../assets/drums/cymbal.wav'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import PlayerPad from '../shared/PlayerPad'

function BeatLiveSamples() {

    const samples = [
        {
            name: 'kick',
            url: 'kick'
        },
        {
            name: 'snare',
            url: 'snare'
        },
        {
            name: 'clap',
            url: 'clap'
        },
        {
            name: 'hit hat closed',
            url: 'hithat_closed'
        },
        {
            name: 'hit hat open',
            url: 'hithat_open'
        },
        {
            name: 'cymbal',
            url: 'cymbal'
        }
    ]

    const playersRef = useRef(new Tone.Players({
        urls: {
            kick: kick,
            snare: snare,
            clap: clap,
            hithat_closed: hithat_closed,
            hithat_open: hithat_open,
            cymbal: cymbal,
        }
    }).toDestination())

    const startPlayer = async (name) => {
        await Tone.start()
        playersRef.current.player(name).start(0)
    }

    return (
        <Box mb={5}>
            <Grid container spacing={1}>
                {samples.map((sample, index) => (
                    <Grid item key={sample.name} xs>
                        <motion.div
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        transition={{duration:1, delay:index/10}}
                        >
                            <PlayerPad onClick={() => startPlayer(sample.url)} />
                            <Typography fontSize={'.6rem'} textAlign={'center'}>{sample.name}</Typography>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default BeatLiveSamples