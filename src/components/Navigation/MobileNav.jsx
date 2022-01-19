import { VStack, Link, useColorModeValue } from '@chakra-ui/react'
import { RegisterButtons } from './RegisterButtons'
export function MobileNav({navItems}) {
    return (
        <VStack align={'start'} p={5} display={{base: 'flex', md: 'none' }} bg={useColorModeValue('white', 'gray.800')} >
            {navItems.map((item, i) => (
                <Link key={i} fontSize='xs' fontWeight={700}>{item.label}</Link>
            ))
            }
            <RegisterButtons/>
        </VStack>
    )
}
