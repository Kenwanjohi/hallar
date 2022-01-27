import { VStack, Link, Stack, Flex, useColorModeValue, Icon, Collapse, Text, useDisclosure } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons'
import { RegisterButtons } from './RegisterButtons';
export function MobileNav({ navItems }) {
  return (
    <VStack
      align={'start'}
      p={5}
      display={{ base: 'flex', md: 'none' }}
      bg={useColorModeValue('white', 'gray.800')}>
      {navItems.map((item, i) => (
        <MobileNavItem key={i} {...item} />
      ))}
      <RegisterButtons />
    </VStack>
  );
}

const MobileNavItem = ({ label, links }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack w="100%" spacing={4} onClick={onToggle}>
      <Flex py={2}  justify={'space-between'} align={'center'}>
        <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        <Icon
          as={ChevronDownIcon}
          transition={'all .25s ease-in-out'}
          transform={isOpen ? 'rotate(180deg)' : ''}
          w={6}
          h={6}
        />
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {links.map((link, i) => (
            <Link key={i} py={2} href={link.href}>
              {link.link}
            </Link>
          ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
