import { VStack, Link } from '@chakra-ui/react'
import { RegisterButtons } from './RegisterButtons'
export function MobileNav({navItems}) {
    return (
        <VStack align={'start'} p={5} display={{base: 'flex', md: 'none' }}>
            {navItems.map(item => (
                <Link fontSize={'sm'} fontWeight={600}>{item.label}</Link>
            ))
            }
            <RegisterButtons/>
        </VStack>
    )
}
