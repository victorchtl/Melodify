import { Box, Typography } from '@mui/material'

function Text() {
    return (
        <Box mt={5}>
            <Typography
                fontSize={'5rem'}
                fontWeight={900}
                letterSpacing={'.5rem'}
                textAlign={'center'}
                mb={5}
                color={'primary'}
            >
                THE BEAT.
            </Typography>
            <Typography
                fontSize={'.8rem'}
                fontWeight={600}
                lineHeight={'1.3rem'}
                textAlign={'center'}
                color={'text.secondary'}
                mb={5}
            >
                Welcome to The Beat!
                <br />
                <br />
                Get ready for an immersive musical experience that will help you understand the fascinating world of music
                <br />
                <br />
                dive into a mesmerizing composition consisting of multiple instruments. Each instrument represents a unique player that you can control discover the enchanting harmony that arises when these instruments play in unison.
                <br />
                <br />
                To provide a structured and engaging experience, the musical composition repeats itself every 4 measures where you can choose the instruments that will join the symphony.
                <br />
                <br />
                Prepare yourself for an exciting adventure where you will discover the inner workings of music and witness the magic that unfolds when different instruments unite.
            </Typography >
        </Box>
    )
}

export default Text