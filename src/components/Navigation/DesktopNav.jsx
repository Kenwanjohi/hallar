import {
  Box,
  HStack,
  Stack,
  Flex,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Text,
  Icon,
  useColorModeValue
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
export function DesktopNav({ navItems }) {
  return (
    <Box as={'nav'} display={{ base: 'none', md: 'block' }}>
      <HStack>
        {navItems.map((item, i) => (
          <Box key={i}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Text p={2} fontSize={'xs'} cursor={'pointer'} fontWeight={700}>
                  {item.label}
                </Text>
              </PopoverTrigger>

              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={useColorModeValue('white', 'gray.800')}
                p={2}
                rounded={'xl'}
                >
                <Stack>
                  {item.links.map((linkItem, i) => (
                    <DesktopNavItem key={i} {...linkItem} />
                  ))}
                </Stack>
              </PopoverContent>
            </Popover>
          </Box>
        ))}
      </HStack>
    </Box>
  );
}

const DesktopNavItem = ({ link, href }) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text fontSize={'xs'} transition={'all .3s ease'} _groupHover={{ color: 'pink.500' }} fontWeight={700}>
            {link}
          </Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.500'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};
