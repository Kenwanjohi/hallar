import { useState } from 'react';
import { Box, Flex, IconButton, Skeleton, SkeletonText, Text } from '@chakra-ui/react';
import { ArrowLeftCircle, ArrowRightCircle } from 'react-feather';
import { PosterCard } from './PosterCard';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const settings = {
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 4,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1216,
      settings: {
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 924,
      settings: {
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 656,
      settings: {
        slidesToScroll: 1
      }
    }
  ]
};

export function CategorySection({ data, section, ...props }) {
  const [slider, setSlider] = useState(null);
  const { isLoading, isError, error, data: categoryData } = data ?? {};
  return (
    <Box as={'section'} position={'relative'} mb="80px">
      <Flex justify={'space-between'} align={'center'} mb="20px">
        <h4 style={{ fontSize: '25px' }}>{section}</h4>
        <Text>See more</Text>
      </Flex>
      {isLoading ? (
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {Array(10)
            .fill()
            .map((item, i) => (
              <Box p="20px" key={i}>
                <Skeleton w="290px" h="420px"></Skeleton>
                <SkeletonText mt="4" noOfLines={2} spacing="4"></SkeletonText>
              </Box>
            ))}
        </Slider>
      ) : isError ? (
        <Text>{error}</Text>
      ) : (
        <>
          <IconButton
            aria-label="left-arrow"
            position="absolute"
            left="-15px"
            top="40%"
            transform={'translate(0%, -50%)'}
            zIndex={2}
            onClick={() => slider?.slickPrev()}>
            <ArrowLeftCircle />
          </IconButton>
          {/* Right Icon */}
          <IconButton
            aria-label="right-arrow"
            position="absolute"
            right="-15px"
            top="40%"
            transform={'translate(0%, -50%)'}
            zIndex={2}
            onClick={() => slider?.slickNext()}>
            <ArrowRightCircle />
          </IconButton>
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            {categoryData?.results?.map((item, i) => (
              <PosterCard key={i} details={item} />
            ))}
          </Slider>
        </>
      )}
    </Box>
  );
}
