import { useState } from 'react';
import { Box, Image, Stack, Text, Collapse } from '@chakra-ui/react';
import { Link } from 'react-router-dom'

export function PosterCard({ details, height, width, margin, ...props }) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const hideShow = () => setShow(false);

  function truncateString(str, num = 30) {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + '...';
  }
  const { poster_path, name, release_date, first_air_date, title, overview, vote_average , id, media_type} =
    details ?? {};
  const subRoute = `${first_air_date ? 'tv' : (media_type ? (media_type === 'tv' ? 'tv' : 'movie') : 'movie')}`
  return (
    <Stack spacing={4}  mr={margin || "20px"}>
      <Box
        color="white"
        w={width || "290px"}
        h={height || "420px"}
        position={'relative'}
        onMouseOver={handleShow}
        onMouseLeave={hideShow}>
        <Image src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="Movie poster" h="100%" />
        <Stack
          p={2}
          position={'absolute'}
          top="0"
          left="0"
          w="100%"
          h="100%"
          justify={'end'}
          bgGradient="linear(to-b, transparent,40%, rgba(8, 8, 8, 0.5),60%, rgba(8, 8, 8))">
          <h1 style={{ fontSize: '20px', fontWeight: '700' }}>{title || name}</h1>
          <Text>
            {vote_average} Tmdb • ({(release_date || first_air_date).substring(0, 4)})
          </Text>
          <Collapse startingHeight={0} in={show}>
            <Text>{truncateString(overview, 105)}</Text>
          </Collapse>
          <Link to={`/details/${subRoute}/${id}`} >
          <Box>
            <svg width="40px" height="40px" viewBox="0 0 60 60" className="cu-button-detail">
              <circle
                fillOpacity="0.2"
                cx="30"
                cy="30"
                r="29"
                stroke="#FFFFFF"
                strokeWidth="1.5"></circle>
              <g transform="translate(16.071429, 17.142857)" fillRule="nonzero" fill="#FFFFFF">
                <path d="M21.9263541,11.4642855 L0,11.4642855 L0,13.6071427 L21.9420593,13.6071427 L13.0824461,22.1982827 L14.5976749,23.6675955 L26.069575,12.5433287 L14.5976749,1.41906191 L13.0824461,2.8883747 L21.9263541,11.4642855 Z"></path>
              </g>
            </svg>
          </Box>
          </Link>
        </Stack>
      </Box>
      <Box>
        <h4 style={{ fontSize: '20px' }}>{truncateString(title || name)}</h4>
        <Text>
          {vote_average} Tmdb • ({(release_date || first_air_date).substring(0, 4)})
        </Text>
      </Box>
    </Stack>
  );
}
