import { useState } from 'react'
import { Box, Image, Stack, Text, Collapse } from '@chakra-ui/react'

export function PosterCard() {
    const [show, setShow] = useState(false)

    const handleShow = () => setShow(true)
    const hideShow = () => setShow(false)
    return (
        <Stack spacing={4} mr='20px' >
            <Box color='white' w='290px' h='420px' position={'relative'} onMouseOver={handleShow} onMouseLeave={hideShow}>
                <Image src='https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg' alt='Movie poster' />
                <Stack p={2} position={'absolute'} top='0' left='0' w='100%' h='100%' justify={'end'} bgGradient='linear(to-b, transparent,40%, rgba(8, 8, 8, 0.5),60%, rgba(8, 8, 8))'>
                    <h1 style={{fontSize:'20px', fontWeight: '700'}} >The dark night</h1>
                    <Text>PG-13 • Comedy, Spies • Movie (2005)</Text>
                    <Collapse startingHeight={0} in={show} >
                        <Text>Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harve...</Text>
                    </Collapse>
                    <Box>
                        <svg width="40px" height="40px" viewBox="0 0 60 60" class="cu-button-detail"><circle fill-opacity="0.2" cx="30" cy="30" r="29" stroke="#FFFFFF" stroke-width="1.5"></circle><g transform="translate(16.071429, 17.142857)" fill-rule="nonzero" fill="#FFFFFF"><path d="M21.9263541,11.4642855 L0,11.4642855 L0,13.6071427 L21.9420593,13.6071427 L13.0824461,22.1982827 L14.5976749,23.6675955 L26.069575,12.5433287 L14.5976749,1.41906191 L13.0824461,2.8883747 L21.9263541,11.4642855 Z"></path></g></svg>
                    </Box>
                </Stack>
            </Box>
            <Box >
            <h1 style={{fontSize:'20px', fontWeight: '700'}} >The dark night</h1>
            <Text>PG-13 • Comedy, Spies • Movie (2005)</Text>
            </Box>
        </Stack>
    )
}
