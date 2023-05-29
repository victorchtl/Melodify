import { Box, Button, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Home() {

    const title = 'Melodify'

    return (
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} minHeight={'100vh'}>
            <Box width={'100%'} display={'flex'} justifyContent={'center'} mb={5}>
                {title.split('').map((letter, index) => (
                    <motion.div
                        key={letter + index}
                        initial={{ opacity: 0, x: -20 - index }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 3, delay: index / 20 }}
                    >
                        <Typography
                            variant='h1'
                            color={'primary.main'}
                            mr={.5}
                        >
                            {letter}
                        </Typography>
                    </motion.div>
                ))
                }
            </Box>

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
                    <Link to={'/beat'}>
                        <Button variant='outlined'>start</Button>
                    </Link>
                </Box>
            </motion.div>
        </Box >
    )
}

export default Home