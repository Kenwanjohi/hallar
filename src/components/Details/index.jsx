import { Box, Flex, HStack, Image, Stack, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { ColorExtractor } from 'react-color-extractor';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useState } from 'react';

const BASE_URL = 'https://api.themoviedb.org/3/';
const apikey = import.meta.env.VITE_API_KEY;

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


function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : null;
}

async function fetchMoviesTvShowsDetails(type, id) {
  let response = await axios.get(`${BASE_URL}${type}/${id}?api_key=${apikey}&language=en-US`);
  return response.data;
}
export function Details() {
  const [color, setColor] = useState([]);
  const { category, id } = useParams();
  const { data, isLoading, isError, error } = useQuery('details', () =>
    fetchMoviesTvShowsDetails(category, id),
    {
    refetchOnMount: true
}
  );
  const { title, overview, poster_path,first_air_date, release_date, runtime, tagline, vote_average, genres } =
    data ?? {};

  function getColors(colors) {
    setColor(colors);
  }


  return (
    <Box pt='60px'>
      {isLoading ? (
        <Text>...Loading</Text>
      ) : isError ? (
        <Text>error</Text>
      ) : (
        <Box  bgGradient={`linear(135deg, ${color[0]}, 50%, ${color[1]})`}>
          <HStack position='relative' h='max-content' align={{base: 'end', md: 'center'}}>
            <Box width={{ base: '100%', md: '500px'}} m={{md: '50px 0px 50px 50px'}} >
              <ColorExtractor getColors={getColors}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  width="100%"
                  alt="Movie poster"
                />
              </ColorExtractor>
            </Box>
            <Stack left={{base: '-.5rem', md: 'initial'}}  p='0 20px 10px 20px' h='100%' w='100%' bgGradient={{base: `linear(to-b, transparent, 20%, ${hexToRgb(color[0])})`, md: 'none'}} justifyContent={{base: 'end', md: 'initial'}} position={{base: 'absolute', md: 'initial'}} >
              <Text>{tagline}</Text>
              <h4 style={{ fontSize: '20px' }}>{title}</h4>
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
      )}
    </Box>
  );
}
