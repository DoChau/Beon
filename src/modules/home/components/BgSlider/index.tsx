"use client"

import React from 'react';
import Image from 'next/image';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { relative } from 'path';

const BgSlider = () => {
  const properties = {
    duration: 3000,
    autoplay: true,
    transitionDuration: 5000,
    arrows: false,
    infinite: true,
    easing: "linear",
  }

  const fadeImages = [
    {
      url: 'https://webnailsbucket.s3.amazonaws.com/beon/home-bg/frame1%401440x.png',
    },
    {
      url: 'https://webnailsbucket.s3.amazonaws.com/beon/home-bg/frame2%401440x.png',
    },
    {
      url: 'https://webnailsbucket.s3.amazonaws.com/beon/home-bg/frame3%401440x.png',
    },
    {
      url: 'https://webnailsbucket.s3.amazonaws.com/beon/home-bg/frame4%401440x.png',
    },
    
  ];
  return (
    <div className="slide-container">
      <Fade {...properties}>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <Image 
            src={fadeImage.url}
            alt="slide"
            width={2880}
            height={1650}
            />
            
          </div>
        ))}
      </Fade>
    </div>
  )
}
export default BgSlider