import React from 'react';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import { fetchMoviesTvShows, fetchTrends } from '../../api';
import { useLocation, useParams } from 'react-router-dom';
import { useInfiniteQuery } from 'react-query';
import { PosterCard  } from '../Main/PosterCard'
export function More() {
  const { section } = useParams();
  const { pathname } = useLocation();
  const mediaType = pathname.slice(1, pathname.lastIndexOf('/'));

  const { data, fetchNextPage } = useInfiniteQuery(
    section,
    ({ pageParam = 1 }) => fetchMoviesTvShows(section, mediaType, pageParam),
    {
      getNextPageParam: (lastpage) => {
        const { page, total_pages: totalPages } = lastpage;
        console.log(page);
        return page < totalPages ? page + 1 : undefined;
      }
    }
  );
  // const data = useInfiniteQuery(section, () => fetchTrends(path), {
  //   getNextPageParam: (lastpage, pages) => lastpage.nextPage
  // });
  // console.log(data)
  console.log(data);
  return (
    <Box pt="60px">
      <Grid templateColumns= {{base:'repeat(2, 1fr)', md: 'repeat(3, 1fr)'}} gap={6}>
        {data && data.pages.map((group, i) => (
          <React.Fragment key={i}>
            {group.results.map((item) => (
              <GridItem w='100%' key={item.id} >
                <PosterCard details={item} />
              </GridItem>
            ))}
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
}
