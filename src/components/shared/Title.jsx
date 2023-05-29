/* eslint-disable react/prop-types */
import { Typography } from '@mui/material'
import { motion } from 'framer-motion'

function Title({ title }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
        >
            <Typography variant='h1' color={'secondary.light'}>
                {title}
            </Typography>
        </motion.div>
    )
}

export default Title