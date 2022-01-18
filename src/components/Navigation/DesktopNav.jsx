import { Box, HStack, Link } from '@chakra-ui/react'
export  function DesktopNav({navItems}) {

    return (
        <Box as={'nav'}  display={{ base: 'none', md: 'block' }}>
            <HStack>
                {navItems.map(item => (
                  <Link fontSize={'xs'} fontWeight={700}>{item.label}</Link>
                ))
                }
            </HStack>
        </Box>
    )
}