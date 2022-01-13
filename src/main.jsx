import React from 'react'
import ReactDOM from 'react-dom'

import { ChakraProvider , extendTheme} from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        fontFamily: `'Signika', sans-serif`
      },
      // styles for the `a`
      // a: {
      //   color: 'teal.500',
      //   _hover: {
      //     textDecoration: 'underline',
      //   },
      // },
    },
  },
})

import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme} >
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
