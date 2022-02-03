import { Stack, Button } from '@chakra-ui/react';

export function RegisterButtons() {
  return (
    <Stack direction={'row'}>
      <Button
        variant={'outline'}
        borderColor={'pink.500'}
        fontSize={'sm'}
        fontWeight={600}
        _hover={{ bg: 'pink.500', color: 'white' }}>
        Sign in
      </Button>
      <Button
        bg={'pink.500'}
        color={'white'}
        fontSize={'sm'}
        fontWeight={600}
        _hover={{ bg: 'pink.300' }}>
        Sign up
      </Button>
    </Stack>
  );
}
