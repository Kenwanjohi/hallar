import axios from 'axios';
import { useQuery } from 'react-query';
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { CategorySection } from './CategorySection';

const BASE_URL = 'https://api.themoviedb.org/3/';
const apikey = import.meta.env.VITE_API_KEY;
const endPoints = {
  popular: 'popular',
  nowplaying: 'now_playing',
  comingsoon: 'upcoming',
  toprated: 'top_rated',
  airingtoday: 'airing_today',
  ontheair: 'on_the_air'
};
async function fetchMovies(category, type = 'movie') {
  let response = await axios.get(
    `${BASE_URL}${type}/${endPoints[`${category}`]}?api_key=${apikey}&language=en-US`
  );
  return response.data.results;
}
async function fetchMoviesTvShows(category, type = 'movie') {
  let response = await axios.get(
    `${BASE_URL}${type}/${endPoints[`${category}`]}?api_key=${apikey}&language=en-US`
  );
  return response.data;
}
async function fetchTrends(type) {
  let response = await axios.get(`${BASE_URL}trending/${type}/week?api_key=${apikey}`);
  return response.data;
}
export function Main() {
  const popularData = useQuery('popular', () => fetchMoviesTvShows('popular'));
  const nowPlayingData = useQuery('nowplaying', () => fetchMoviesTvShows('nowplaying'));
  const comingSoonData = useQuery('comingsoon', () => fetchMoviesTvShows('comingsoon'));
  const topRatedData = useQuery('toprated', () => fetchMoviesTvShows('toprated'));
  const popularTvData = useQuery('populartv', () => fetchMoviesTvShows('popular', 'tv'));
  const nowPlayingTvData = useQuery('ontheair', () => fetchMoviesTvShows('ontheair', 'tv'));
  const comingSoonTvData = useQuery('airingtoday', () => fetchMoviesTvShows('airingtoday', 'tv'));
  const topRatedTvData = useQuery('topratedtv', () => fetchMoviesTvShows('toprated', 'tv'));
  const movieTrendsdata = useQuery('movietrends', () => fetchTrends('movie'));
  const tvTrendsData = useQuery('tvtrends', () => fetchTrends('tv'));

  return (
    <Box as={'main'}>
      <Tabs>
        <TabList>
          <Tab>Movies</Tab>
          <Tab>Trending</Tab>
          <Tab>Tv Shows</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <CategorySection data={popularData} />
            <CategorySection data={nowPlayingData} />
            <CategorySection data={comingSoonData} />
            <CategorySection data={topRatedData} />
          </TabPanel>
          <TabPanel>
            <CategorySection data={movieTrendsdata} />
            <CategorySection data={tvTrendsData} />
          </TabPanel>
          <TabPanel>
            <CategorySection data={popularTvData} />
            <CategorySection data={nowPlayingTvData} />
            <CategorySection data={comingSoonTvData} />
            <CategorySection data={topRatedTvData} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
