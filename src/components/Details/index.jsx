import { Box, HStack, Stack, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchMoviesTvShowsDetails, fetchImages } from '../../api';
import ColorThief from 'colorthief';
import { useState, useRef } from 'react';

function formatTime(num) {
  let time;
  if (num > 0 && num < 60) {
    time = `${num}mins`;
  } else if (num === 60) {
    time = `${60 / 60} hr`;
  } else if (num > 60) {
    let hour = Math.floor(num / 60);
    let min = Math.round((num / 60 - hour) * 60);
    time = `${hour}hrs ${min}mins`;
  } else {
    return null;
  }
  return time;
}

function mapToRgb(arr) {
  return [`rgba(${arr.join(',')},1)`, `rgba(${arr.join(',')},0.6)`];
}

export function Details() {
  const [color, setColor] = useState(null);
  const imageEl = useRef(null);
  const container = useRef(null);
  const { category, id } = useParams();

  const { data, isLoading, isError, error } = useQuery(
    'details',
    () => fetchMoviesTvShowsDetails(category, id),
    {
      refetchOnMount: true
    }
  );

  const {
    data: imagesData,
    isLoading: imageIsLoading,
    isError: imageIsError,
    error: imageError
  } = useQuery('images', () => fetchImages(category, id), {
    refetchOnMount: true
  });

  const {
    title,
    overview,
    poster_path,
    first_air_date,
    release_date,
    runtime,
    tagline,
    vote_average,
    genres
  } = data ?? {};

  function handleImageOnload() {
    const colorThief = new ColorThief();
    const res = colorThief.getColor(imageEl.current);
    // https://www.w3.org/TR/AERT/#color-contrast
    // Calculating the Perceived Brightness of a Color
    const brightness = Math.round(
      (parseInt(res[0]) * 299 + parseInt(res[1]) * 587 + parseInt(res[2]) * 114) / 1000
    );
    const textColour = brightness > 125 ? '#1a202c' : 'white';

    container.current.style.color = textColour;
    const dorminantColor = mapToRgb(res);
    setColor(dorminantColor);
  }

  return (
    <Box pt="60px">
      {isLoading ? (
        <Text>...Loading</Text>
      ) : isError ? (
        <Text>error</Text>
      ) : (
        <Box
          ref={container}
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          backgroundPosition="right -200px top"
          backgroundImage={`https://image.tmdb.org/t/p/w1280${imagesData?.backdrops[0]?.file_path}`}>
          <Box
            bgGradient={
              color?.length ? `linear(to right, ${color[0]} 150px, ${color[1]} 100%)` : null
            }>
            <HStack position="relative" h="max-content" align={{ base: 'end', md: 'center' }}>
              <Box width={{ base: '100%', md: '500px' }} m={{ md: '50px 0px 50px 50px' }}>
                <img
                  src={`https://image.tmdb.org/t/p/w780${poster_path}`}
                  width="100%"
                  alt="Movie poster"
                  ref={imageEl}
                  crossOrigin="anonymous"
                  onLoad={handleImageOnload}
                />
              </Box>
              <Stack
                left={{ base: '-.5rem', md: 'initial' }}
                p="0 20px 10px 20px"
                h="100%"
                w="100%"
                bgGradient={{
                  base: color?.length
                    ? `linear(to bottom, transparent , ${color[1]} 50%, ${color[0]} 100%)`
                    : null,
                  md: 'none'
                }}
                justifyContent={{ base: 'end', md: 'initial' }}
                position={{ base: 'absolute', md: 'initial' }}>
                <Text>{tagline}</Text>
                <h4 style={{ fontSize: '2rem' }}>{title}</h4>
                <Text>
                  {genres &&
                    `${genres.map((el) => el.name).join('•')}•${(
                      release_date || first_air_date
                    ).substring(0, 4)}`}
                </Text>
                <Text>{formatTime(runtime)}</Text>
                <Text width={{ lg: '80%' }}>{overview}</Text>
                <Text>{vote_average} Tmdb</Text>
              </Stack>
            </HStack>
          </Box>
        </Box>
      )}
    </Box>
  );
}
