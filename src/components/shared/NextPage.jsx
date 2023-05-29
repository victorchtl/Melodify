/* eslint-disable react/prop-types */
import { Box, Typography } from '@mui/material'
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import { useNavigate } from 'react-router';

function NextPage({pageName, pageUrl}) {

    const navigate = useNavigate()

    return (
        <Box
            width={'100%'}
            height={'100vh'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            p={5}
            borderRadius={'.5rem'}
            bgcolor={'secondary.dark'}
            onClick={() => navigate(`/${pageUrl}`)}
            sx={{
                cursor:'pointer',
                transition:'all .2s linear',
                '&:hover':{
                    color:'primary.main',
                    transition:'all .2s linear'
                }
            }}
            >
                <Typography mr={1} fontWeight={200} >Next Page : {pageName}</Typography>
                <ArrowRightRoundedIcon fontSize='large' />
            </Box>
        </Box>
    )
}

export default NextPage