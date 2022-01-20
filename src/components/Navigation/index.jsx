import { Box, Flex, HStack, IconButton, Collapse, useDisclosure, useColorMode, useColorModeValue} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon} from '@chakra-ui/icons'
import { Logo } from '../Logo'
import { DesktopNav } from './DesktopNav'
import { MobileNav } from './MobileNav'
import { RegisterButtons } from './RegisterButtons'
const navItems = [
  {
    label: 'TV SHOWS',
    href: '#',
  },
  {
    label: 'MOVIES',
    href: '#',
  },
  {
    label: 'TRENDING',
    href: '#',
  }
];
export function Navigation() {
    const { isOpen: isMobileNavOpen, onToggle } = useDisclosure()
    const { colorMode, toggleColorMode } = useColorMode()
    const backgroundMain = useColorModeValue('white', 'gray.800')
    
    return (
        <Box position={'fixed'} top='0' left='0'  w='100%' zIndex='10' bg={backgroundMain}>
            <Flex  py='10px' px='20px' align={'center'} justify={'space-between'}  borderBottom={1} borderStyle={'solid'} borderColor={useColorModeValue('gray.200', 'gray.900')}>
                <HStack spacing='40px'>
                    <Logo/>
                    <DesktopNav navItems={navItems}/>
                </HStack>
                <HStack>
                    <IconButton aria-label={'Switch theme'} onClick={toggleColorMode}  icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}/>
                    <IconButton aria-label={'Open-Close menu'} onClick={onToggle} display={{ md: 'none' }} icon={ isMobileNavOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />} />
                    <Box display={{ base: 'none', md: 'block' }}>
                      <RegisterButtons />
                    </Box>
                </HStack>
            </Flex>
            <Collapse in={isMobileNavOpen} animateOpacity>
              <MobileNav navItems={navItems}/>
            </Collapse>
        </Box>
    )
}
