import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

function Landing() {
    return (
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} minHeight={'100vh'}>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 3 }}
            >
                <Typography
                    variant='h1'
                    textAlign={'center'}
                    color={'primary.main'}
                    mb={5}
                >
                    Melodify.
                </Typography>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 3 }}
            >
                <Typography
                    textAlign={'center'}
                    variant='body2'
                    color={'text.secondary'}
                    mb={10}
                >
                    Get ready for an immersive musical experience that will let you discover the fascinating world of music
                </Typography >
                <Box textAlign={'center'}>
                    <ExpandMoreRoundedIcon color='primary' />
                </Box>
            </motion.div>
        </Box>
    )
}

export default Landing