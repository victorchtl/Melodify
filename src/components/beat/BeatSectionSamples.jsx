import { Box } from '@mui/material'
import BeatLiveSamples from './BeatLiveSamples'
import Title from '../shared/Title'
import Subtitle from '../shared/Subtitle'
import Text from '../shared/Text'

function BeatSectionSamples() {

    const title = 'Beat'
    const subtitle = `The Drums`
    const paragraphOne = `The beat in music is the rhythmic foundation driven by drums and percussion. It sets the timing and pulse, created through various drum sounds, patterns, and accents. Instruments like bass and rhythm guitar contribute to the overall rhythmic elements, supporting the melody.`
    const paragraphTwo = `Drums consist of six key elements: the kick drum (providing a deep, low-frequency pulse), snare drum (delivering a sharp, cracking sound), clap (adding percussive excitement), hi-hat (offering rhythmic variations with its open and closed variations), ride cymbal (providing a sustained sound for rhythm or melody), and crash cymbal (delivering powerful accents). Together, these elements create the rhythmic foundation of music, adding energy, groove, and dynamics to compositions.`

    return (
        <Box minHeight={"100vh"} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
            <Title title={title} />
            <Subtitle subtitle={subtitle} />
            <Text text={paragraphOne} />
            <Text text={paragraphTwo} />
            <Box  mt={5} />
            <BeatLiveSamples />
        </Box>
    )
}

export default BeatSectionSamples