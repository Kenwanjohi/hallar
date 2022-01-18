import { useState } from 'react'
import { Box, IconButton } from '@chakra-ui/react'
import { ArrowLeftCircle, ArrowRightCircle } from 'react-feather';
import { PosterCard } from './PosterCard'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const settings = {
    arrows: false,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 4,
    variableWidth: true,
    responsive: [
        {
          breakpoint: 1216,
          settings: {
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 924,
          settings: {
            slidesToScroll: 2,
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

export function CategorySection({data,...props}) {
    const [slider, setSlider] = useState(null);
    return (
        <Box as={'section'} position={'relative'}>
            <IconButton
                aria-label="left-arrow"
                position="absolute"
                left='-15px'
                top='40%'
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickPrev()}>
                <ArrowLeftCircle />
            </IconButton>
            {/* Right Icon */}
            <IconButton
                aria-label="right-arrow"
                position="absolute"
                right='-15px'
                top='40%'
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickNext()}>
                <ArrowRightCircle />
            </IconButton>
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
              {
                data && data.map(item => (<PosterCard details={item} />))
              }
            </Slider>
        </Box>
    )
}
