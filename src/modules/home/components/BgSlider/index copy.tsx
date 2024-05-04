"use client"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';

const BgSlider = () => {
  const options = {
    type         : 'loop',
    gap          : '0',
    autoplay     : true,
    //width       : '100%',
    height       : '10vh',
    cover        : true,
    direction    : 'ltr',
  };
    return (
        <Splide
          options={ options }
          aria-labelledby="autoplay-bg"
          >
          <SplideSlide>
            <Image src="https://webnailsbucket.s3.amazonaws.com/beon/bg/bg1.jpeg" 
              alt="bg1" 
              fill
              />
          </SplideSlide>

          <SplideSlide>
            <Image src="https://webnailsbucket.s3.amazonaws.com/beon/bg/bg2.jpeg" 
              alt="bg2" 
              fill
              />
          </SplideSlide>

          <SplideSlide>
            <Image src="https://webnailsbucket.s3.amazonaws.com/beon/bg/bg3.jpeg" 
              alt="bg3" 
              fill
              />
          </SplideSlide>

          <SplideSlide>
            <Image src="https://webnailsbucket.s3.amazonaws.com/beon/bg/bg4.jpeg" 
              alt="bg4" 
              fill
              />
          </SplideSlide>
        </Splide>
  )
}

export default BgSlider
