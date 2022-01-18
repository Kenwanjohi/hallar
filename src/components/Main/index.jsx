import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { CategorySection } from './CategorySection'
import { useEffect } from 'react'
import axios from 'axios';
import { useQuery } from 'react-query'

const BASE_URL = 'https://api.themoviedb.org/3/movie/'
const apikey = `6d52450de693cb39e47fd26bd1c349da`;
const endPoints = {
    "popular" : "popular",
    "nowplaying": "now_playing",
    "comingsoon": "upcoming",
    "toprated": "top_rated"
}
async function fetchMovies(category) {
  let response = await axios.get(`${BASE_URL}${endPoints[`${category}`]}?api_key=${apikey}&language=en-US`)
  return response.data.results
}
export  function Main() {
  const { data, isLoading, isError } = useQuery('popular', () => fetchMovies('popular'))
  console.log(data)
  console.log(isError)
  console.log(isLoading)


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
                <CategorySection data={data} />
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
