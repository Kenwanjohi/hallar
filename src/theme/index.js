import { extendTheme, Heading, theme as base} from '@chakra-ui/react'

const theme = extendTheme({
    styles: {
      global: {
        body: {
          fontFamily: `'Signika', sans-serif;`
        },
  
      }
    },
    config: {
      initialColorMode: 'dark',
      useSystemColorMode: false,
    }
})

export default theme;