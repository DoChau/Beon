"use client"

import React from 'react';
import Image from 'next/image';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { relative } from 'path';

const BgSliderMobile = () => {
  const properties = {
    duration: 5000,
    autoplay: true,
    transitionDuration: 5000,
    arrows: false,
    infinite: true,
    easing: "linear",
  }

  const fadeImages = [
    {
      url: 'https://webnailsbucket.s3.amazonaws.com/beon/home-bg/mobileBg/mobileBg1.png',
    },
    {
      url: 'https://webnailsbucket.s3.amazonaws.com/beon/home-bg/mobileBg/mobileBg2.png',
    },
    {
      url: 'https://webnailsbucket.s3.amazonaws.com/beon/home-bg/mobileBg/mobileBg3.png',
    },
    {
      url: 'https://webnailsbucket.s3.amazonaws.com/beon/home-bg/mobileBg/mobileBg4.png',
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
            width={1024}
            height={2059}
            />
            
          </div>
        ))}
      </Fade>
    </div>
  )
}
export default BgSliderMobile
