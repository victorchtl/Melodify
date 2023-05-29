/* eslint-disable react/prop-types */
import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'

function Text({ text }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <Box
            width={{ xs: '100%', lg: '70%' }}
            textAlign={{xs:'justify', lg:'left'}}
            >
                <Typography color={'text.secondary'} mb={5}>
                    {text}
                </Typography>
            </Box>

        </motion.div>
    )
}

export default Text