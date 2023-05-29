import { motion } from 'framer-motion'
import BeatStepSequencer from './BeatStepSequencer'
import Text from '../shared/Text'
import { Box } from '@mui/material'
import Title from '../shared/Title'
import Subtitle from '../shared/Subtitle'

function BeatSectionDrumsMachine() {

    const title = 'Beat'
    const subtitle = `The Drum Machine`
    const paragraphOne = `Drums serve as the rhythmic backbone in music, adhering to the rules of measures and time signatures.The most common time signature is 4 / 4, where each measure consists of four beats.The drummer maintains a steady pulse, emphasizing the first beat to establish the rhythm.Within each measure, the drummer creates patterns and accents using various drum elements, such as the kick drum, snare drum, and cymbals.These patterns and accents add depth and texture to the music, while adhering to the underlying structure of measures and beats.The drummer's mastery of time signatures and measures ensures a cohesive and engaging rhythmic experience for both musicians and listeners alike.`
    const paragraphTwo = `Now that you've learned how drums work, it's time to unleash your creativity with a drum machine! Explore different drum parts, experiment with presets, and most importantly, have fun! Let your imagination guide you as you create unique beats and dive into the exciting world of electronic rhythm`

    return (
        <Box minHeight={"100vh"} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
            <Title title={title} />
            <Subtitle subtitle={subtitle} />
            <Text text={paragraphOne} />
            <Text text={paragraphTwo} />
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <Box mt={5} />
                <BeatStepSequencer />
            </motion.div>
        </Box>
    )
}

export default BeatSectionDrumsMachine