/* eslint-disable react/prop-types */
import { Typography } from '@mui/material'
import { motion } from 'framer-motion'

function Subtitle({subtitle}) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: .2 }}
        >
            <Typography variant='h2' mb={10} color={'primary'}>
                {subtitle}
            </Typography>
        </motion.div>
    )
}

export default Subtitle