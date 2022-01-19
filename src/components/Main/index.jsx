import axios from 'axios';
import { useQuery } from 'react-query'
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { CategorySection } from './CategorySection'

const BASE_URL = 'https://api.themoviedb.org/3/'
const apikey = `6d52450de693cb39e47fd26bd1c349da`;
const endPoints = {
    "popular" : "popular",
    "nowplaying": "now_playing",
    "comingsoon": "upcoming",
    "toprated": "top_rated",
    "airingtoday": "airing_today"
}
async function fetchMovies(category, type='movie') {
  let response = await axios.get(`${BASE_URL}${type}/${endPoints[`${category}`]}?api_key=${apikey}&language=en-US`)
  return response.data.results
}
export  function Main() {
  const { data: popularData, isLoading: popularLoading, isError: popularError } = useQuery('popular', () => fetchMovies('popular'))
  const { data: nowPlayingData, isLoading: nowPlayingLoading, isError: nowPlayingError } = useQuery('nowplaying', () => fetchMovies('nowplaying'))
  const { data: comingSoonData, isLoading: comingSoonLoading, isError: comingSoonError } = useQuery('comingsoon', () => fetchMovies('comingsoon'))
  const { data: topRatedData, isLoading: topRatedLoading, isError: topRatedError} = useQuery('toprated', () => fetchMovies('toprated'))
  const { data, isLoading, isError} = useQuery('airingtoday', () => fetchMovies('airingtoday', 'tv'))
  console.log(data)




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
                <CategorySection data={popularData}/>
                <CategorySection data={nowPlayingData}/>
                <CategorySection data={comingSoonData}/>
                <CategorySection data={topRatedData}/>
                {/* <Box as={'section'}>Popular</Box>
                <Box as={'section'}>Upcoming</Box>
                <Box as={'section'}>Now playing</Box>
                <Box as={'section'}>Latest</Box>
                <Box as={'section'}>Top rated</Box> */}
              </TabPanel>
              <TabPanel>
                <CategorySection data={data}/>
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
