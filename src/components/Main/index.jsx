import axios from 'axios';
import { useQuery } from 'react-query'
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { CategorySection } from './CategorySection'

const BASE_URL = 'https://api.themoviedb.org/3/'
const apikey = import.meta.env.VITE_API_KEY;
const endPoints = {
    "popular" : "popular",
    "nowplaying": "now_playing",
    "comingsoon": "upcoming",
    "toprated": "top_rated",
    "airingtoday": "airing_today",
    "ontheair": "on_the_air"
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
  const { data: popularTvData, isLoading: popularTvLoading, isError: popularTvError} = useQuery('populartv', () => fetchMovies('popular', 'tv'))
  const { data: nowPlayingTvData, isLoading: nowPlayingTvLoading, isError: nowPlayingTvError} = useQuery('ontheair', () => fetchMovies('ontheair', 'tv'))
  const { data: comingSoonTvData, isLoading: comingSoonTvLoading, isError:  comingSoonTvError} = useQuery('airingtoday', () => fetchMovies('airingtoday', 'tv'))
  const { data: topRatedTvData, isLoading: topRatedTvLoading, isError: topRatedTvError} = useQuery('topratedtv', () => fetchMovies('toprated', 'tv'))

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
              </TabPanel>
              <TabPanel>
                <CategorySection data={popularTvData}/>
                <CategorySection data={nowPlayingTvData}/>
                <CategorySection data={comingSoonTvData}/>
                <CategorySection data={topRatedTvData}/>
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
