import { Box, Flex, Switch, Text } from '@chakra-ui/react';
import { Main } from './components/Main';
import { Navigation } from './components/Navigation';
import { Details } from './components/Details'
import { More } from './components/More'
import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes, Route } from 'react-router-dom';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false
    }
  }
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Box>
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Flex
                  direction={'column'}
                  justify={'center'}
                  align={'center'}
                  w="100%"
                  h="60vh"
                  bgGradient="linear(135deg, rgb(45, 12, 63) 0%, rgb(148, 79, 110) 50%, rgb(239, 146, 118) 100%)">
                  <Text fontSize={'20px'}>Discover your favorite movies and tv shows</Text>
                </Flex>
                <Main />
              </>
            }
          />
          <Route path=":category/:id" element={<Details/>} />
          <Route path="movie/:section" element={<More/>} />
          <Route path="tv/:section" element={<More/>} />
        </Routes>
      </Box>
    </QueryClientProvider>
  );
}

export default App;
