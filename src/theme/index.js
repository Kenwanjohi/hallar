import { extendTheme, Heading, theme as base} from '@chakra-ui/react'

const theme = extendTheme({
    styles: {
      global: {
        body: {
          fontFamily: `'Signika', sans-serif;`
        },
  
      }
    },
})

export default theme;