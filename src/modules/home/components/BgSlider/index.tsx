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
    transitionDuration: 2000,
    arrows: false,
    infinite: true,
    easing: "ease",
  }

  const fadeImages = [
    {
      url: 'https://webnailsbucket.s3.amazonaws.com/beon/bggrid/1/00.jpg',
    },
    {
      url: 'https://webnailsbucket.s3.amazonaws.com/beon/bggrid/1/1.jpg',
    },
    {
      url: 'https://webnailsbucket.s3.amazonaws.com/beon/bggrid/1/2.jpg',
    },
    {
      url: 'https://webnailsbucket.s3.amazonaws.com/beon/bggrid/1/3.jpg',
    },
    {
      url: 'https://webnailsbucket.s3.amazonaws.com/beon/bggrid/1/4.jpg',
    },
    {
      url: 'https://webnailsbucket.s3.amazonaws.com/beon/bggrid/1/5.jpg',
    },
    {
      url: 'https://webnailsbucket.s3.amazonaws.com/beon/bggrid/1/6.jpg',
    },
    {
      url: 'https://webnailsbucket.s3.amazonaws.com/beon/bggrid/1/9.jpg',
    },
    {
      url: 'https://webnailsbucket.s3.amazonaws.com/beon/bggrid/1/10.jpg',
    },
    {
      url: 'https://webnailsbucket.s3.amazonaws.com/beon/bggrid/1/12.jpg',
    },
    
  ];
  return (
    <div className="slide-container">
      <Fade {...properties}>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img 
              className="lazy"
              style={{ 
                width: '100%', 
                height: '2000px', 
                objectFit: 'cover',
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