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
            <CategorySection mediaType='movie' data={movieTrendsdata} section="movieTrends" />
            <CategorySection mediaType='tv' data={tvTrendsData} section="tvTrends" />
          </TabPanel>
          <TabPanel>
            <CategorySection mediaType='movie' data={popularData} section="popular" />
            <CategorySection mediaType='movie' data={nowPlayingData} section="nowplaying" />
            <CategorySection mediaType='movie' data={comingSoonData} section="comingsoon" />
            <CategorySection mediaType='movie' data={topRatedData} section="top rated" />
          </TabPanel>
          <TabPanel>
            <CategorySection mediaType='tv' data={popularTvData} section="popular" />
            <CategorySection mediaType='tv' data={nowPlayingTvData} section="ontheair" />
            <CategorySection mediaType='tv' data={comingSoonTvData} section="airingtoday" />
            <CategorySection mediaType='tv' data={topRatedTvData} section="top rated" />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
