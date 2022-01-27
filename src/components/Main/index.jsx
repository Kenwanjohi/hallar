import { useQuery } from 'react-query';
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { CategorySection } from './CategorySection';

import { fetchMoviesTvShows, fetchTrends } from '../../api'

const tabs = ['Trending', 'Movies', 'Tv shows']

export function Main() {
  const movieTrendsdata = useQuery('movietrends', () => fetchTrends('movie'));
  const tvTrendsData = useQuery('tvtrends', () => fetchTrends('tv'));
  const popularData = useQuery('popular', () => fetchMoviesTvShows('popular'));
  const nowPlayingData = useQuery('nowplaying', () => fetchMoviesTvShows('nowplaying'));
  const comingSoonData = useQuery('comingsoon', () => fetchMoviesTvShows('comingsoon'));
  const topRatedData = useQuery('toprated', () => fetchMoviesTvShows('toprated'));
  const popularTvData = useQuery('populartv', () => fetchMoviesTvShows('popular', 'tv'));
  const nowPlayingTvData = useQuery('ontheair', () => fetchMoviesTvShows('ontheair', 'tv'));
  const comingSoonTvData = useQuery('airingtoday', () => fetchMoviesTvShows('airingtoday', 'tv'));
  const topRatedTvData = useQuery('topratedtv', () => fetchMoviesTvShows('toprated', 'tv'));
 
  return (
    <Box as={'main'}>
      <Tabs >
        <TabList>
          {tabs.map(tab => <Tab _selected={{ color: 'pink.500' }}>{tab}</Tab>)}
        </TabList>
        <TabPanels>
          <TabPanel>
            <CategorySection data={movieTrendsdata} section="Movies" />
            <CategorySection data={tvTrendsData} section="Tv Shows" />
          </TabPanel>
          <TabPanel>
            <CategorySection data={popularData} section="Popular" />
            <CategorySection data={nowPlayingData} section="Now Playing" />
            <CategorySection data={comingSoonData} section="Coming Soon" />
            <CategorySection data={topRatedData} section="Top rated" />
          </TabPanel>
          <TabPanel>
            <CategorySection data={popularTvData} section="Popular" />
            <CategorySection data={nowPlayingTvData} section="Now Playing" />
            <CategorySection data={comingSoonTvData} section="Coming Soon" />
            <CategorySection data={topRatedTvData} section="Top rated" />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
