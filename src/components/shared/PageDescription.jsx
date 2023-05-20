/* eslint-disable react/prop-types */
import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'

function PageDescription({ title, subtitle, text }) {
    return (
        <Box width={{ xs: '100%', lg: '70%' }}>
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <Typography variant='h2' mb={5} color={'primary'}>
                    {title}
                </Typography>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <Typography color={'text.secondary'} mb={3}>
                    {subtitle}
                </Typography>
                <Typography color={'text.secondary'} mb={10}>
                    {text}
                </Typography>
            </motion.div>
        </Box>
    )
}

export default PageDescription