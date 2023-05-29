/* eslint-disable react/prop-types */
import { Box, useTheme } from '@mui/material'

function PlayerPad({ onClick }) {

    const theme = useTheme()

    const handleMouseDown = (event) => {
        event.target.style.background = `${theme.palette.primary.main}`
        onClick()
    }

    return (
        <Box
            onMouseDown={handleMouseDown}
            onMouseUp={(e) => e.target.style.background = `${theme.palette.secondary.light}`}
            onMouseEnter={(e) => e.target.style.background = `${theme.palette.primary.dark}`}
            onMouseLeave={(e) => e.target.style.background = `${theme.palette.secondary.light}`}
            width={'100%'}
            borderRadius={'.5rem'}
            bgcolor={'secondary.light'}
            sx={{
                cursor: 'pointer',
                aspectRatio: '16/9',
                transition: 'all .1s linear',
            }}
        />
    )
}

export default PlayerPad