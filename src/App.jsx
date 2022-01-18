import { Box } from '@chakra-ui/react'
import { Main } from './components/Main'
import { Navigation } from './components/Navigation'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

 // Create a client
 const queryClient = new QueryClient()
function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <Box>
        <Navigation/>
        <Box w='100%' h='60vh' bgGradient='linear(135deg, rgb(45, 12, 63) 0%, rgb(148, 79, 110) 50%, rgb(239, 146, 118) 100%)' />
        <Main/>
      </Box>
    </QueryClientProvider>
  )
}

export default App