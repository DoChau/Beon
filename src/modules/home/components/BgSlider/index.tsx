"use client"

import React from 'react';
import Image from 'next/image';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { relative } from 'path';

const BgSlider = () => {
  const properties = {
    duration: 5000,
    autoplay: true,
    transitionDuration: 500,
    arrows: false,
    infinite: true,
    easing: "ease",
  }

  const fadeImages = [
    {
      url: 'https://webnailsbucket.s3.amazonaws.com/beon/home-bg/frame1%401440x.webp',
    },
    {
      url: 'https://webnailsbucket.s3.amazonaws.com/beon/home-bg/frame2%401440x.webp',
    },
    {
      url: 'https://webnailsbucket.s3.amazonaws.com/beon/home-bg/frame3%401440x.webp',
    },
    {
      url: 'https://webnailsbucket.s3.amazonaws.com/beon/home-bg/frame4%401440x.webp',
    },
    
  ];
  return (
    <div className="slide-container">
      <Fade {...properties}>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img 
              style={{ 
                width: '100%', 
                height: 'auto', 
                objectFit: 'fill',
                objectPosition: 'right bottom'
                }} 
              src={fadeImage.url} />
          </div>
        ))}
      </Fade>
    </div>
  )
}
export default BgSlider