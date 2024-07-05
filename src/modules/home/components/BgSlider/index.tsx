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
    transitionDuration: 1000,
    arrows: false,
    infinite: true,
    easing: "ease",
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
            style={{
              width: '100%',
              height: '100vh',
            }}
            width={1440}
            height={850}
            />
            
          </div>
        ))}
      </Fade>
    </div>
  )
}
export default BgSlider