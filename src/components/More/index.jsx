import React from 'react';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import { fetchMoviesTvShows, fetchTrends } from '../../api';
import { useLocation, useParams } from 'react-router-dom';
import { useInfiniteQuery } from 'react-query';
import { PosterCard } from '../Main/PosterCard';
import InfiniteScroll from 'react-infinite-scroll-component';
export function More() {
  const { section } = useParams();
  const { pathname } = useLocation();
  const mediaType = pathname.slice(1, pathname.lastIndexOf('/'));

  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } =
    useInfiniteQuery(
      section,
      ({ pageParam = 1 }) => {
        if (section === 'tvTrends' || section === 'movieTrends') {
          return fetchTrends(mediaType, pageParam);
        }
        return fetchMoviesTvShows(section, mediaType, pageParam);
      },
      {
        getNextPageParam: (lastpage) => {
          const { page, total_pages: totalPages } = lastpage;
          return page < totalPages ? page + 1 : undefined;
        },
        refetchOnMount: true
      }
    );

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'error') return <span>Error: {error.message}</span>;
  const totalItems = (data?.pages ?? []).map((group) => group.results).flat(1).length;

  return (
    <Box pt="60px">
      <InfiniteScroll
        dataLength={totalItems}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }>
        <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6}>
          {(data?.pages ?? []).map((group, i) => (
            <React.Fragment key={i}>
              {group.results.map((item) => (
                <GridItem key={item.id}>
                  <PosterCard height="initial" width="initial" details={item} />
                </GridItem>
              ))}
            </React.Fragment>
          ))}
        </Grid>
      </InfiniteScroll>
    </Box>
  );
}
