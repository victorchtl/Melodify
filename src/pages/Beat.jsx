import { Box } from '@mui/material';
import BeatStepSequencer from '../components/beat/BeatStepSequencer';
import { beatTitle, beatSubtitle, beatText } from '../texts/BeatDescription'
import PageDescription from '../components/shared/PageDescription';
import { motion } from 'framer-motion'

function Beat() {

    return (
        <Box minHeight={"100vh"} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
            <PageDescription title={beatTitle} subtitle={beatSubtitle} text={beatText} />
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <BeatStepSequencer />
            </motion.div>
        </Box>
    )
}

export default Beat