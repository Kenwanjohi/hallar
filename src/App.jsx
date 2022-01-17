import { Box } from '@chakra-ui/react'
import { Navigation } from './components/Navigation'

function App() {

  return (
    <Box>
      <Navigation/>
      <Box w='100%' h='70vh' bgGradient='linear(135deg, rgb(45, 12, 63) 0%, rgb(148, 79, 110) 50%, rgb(239, 146, 118) 100%)' />
    </Box>
  )
}

export default App