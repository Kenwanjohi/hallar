import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { CategorySection } from './CategorySection'
export  function Main() {
    return (
      <Box as={'main'}>
          <Tabs>
            <TabList>
              <Tab>Movies</Tab>
              <Tab>Tv Shows</Tab>
              <Tab>Trending</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <CategorySection/>
                <CategorySection/>
                <CategorySection/>
                <CategorySection/>
                <CategorySection/>
                {/* <Box as={'section'}>Popular</Box>
                <Box as={'section'}>Upcoming</Box>
                <Box as={'section'}>Now playing</Box>
                <Box as={'section'}>Latest</Box>
                <Box as={'section'}>Top rated</Box> */}
              </TabPanel>
              <TabPanel>
                <CategorySection/>
                <CategorySection/>
                <CategorySection/>
                <CategorySection/>
                <CategorySection/>
                {/* <Box as={'section'}>Popular</Box>
                <Box as={'section'}>Upcoming</Box>
                <Box as={'section'}>Now playing</Box>
                <Box as={'section'}>Latest</Box>
                <Box as={'section'}>Top rated</Box> */}
              </TabPanel>
              <TabPanel>
                <Box as={'section'}>All</Box>
                <Box as={'section'}>Movie</Box>
                <Box as={'section'}>Tv shows</Box>
              </TabPanel>
            </TabPanels>
        </Tabs>

      </Box>
    )
}
