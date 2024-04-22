//import { Product } from "@medusajs/medusa"
import { Metadata } from "next"
import Image from "next/image"
import Script from "next/script"
//import { getCollectionsList, getProductsList, getRegion } from "@lib/data"
//import FeaturedProducts from "@modules/home/components/featured-products"
//import Hero from "@modules/home/components/hero"
//import Iframe from 'react-iframe'
//import Script from 'next/script'


//import React, { useState } from 'react';


//logo text clip
//          <link rel="preconnect" href="https://fonts.googleapis.com"/>
//<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
//<h1 className="rainbow-text font-medium justify-self-center z-10">
//  P &nbsp; SCH
//</h1>

//wave bottom
//<div className="ocean">
//<div className="antiwave"></div>
//<div className="wave"></div>
//<div className="wave"></div>
//<div className="wave"></div>
//</div> 

//discount 3d
//<div>
//   <h3 className="discount z-10 w-full" > Happy hour and more... </h3>
// </div>

import './style.css'

//weather widget get data
import { Location, HourlyForecastResponse } from "lib/weather-plugin/types"
import { getHourlyData } from "lib/weather-plugin/getHourlyData"
import CurrentWeather from "lib/weather-plugin/CurrentWeather"
import HourlyForecast from "lib/weather-plugin/HourlyForecast"
import { notFound } from "next/navigation"

const DEFAULT_LOCATION: Location = {
  city: "Wall Township, NJ, US",
  coord: {
    lat: "40.17",
    lon: "-74.10",
  },
}

const { lat, lon } = DEFAULT_LOCATION.coord


export const metadata: Metadata = {
  title: "Beon Nails - 1933 State Route 35 Unit 104, NJ 07719",
  description:
    "Happy Hour and more...",
}

export default async function Home() {
  
  //get weather data
  const HourlyDataRequest: HourlyForecastResponse = await getHourlyData({
    lat,
    lon,
  })

  const [hourly_data] =
      await Promise.all([
        HourlyDataRequest,
      ])
  if (!hourly_data) return notFound()

  return (
    <>
      <div className="grid max-w-6xl w-full h-screen -mb-12 sm:-mb-16 p-5 mx-auto items-center overflow-hidden font-futura z-0">

        <div className="logocontent grid items-center mx-auto justify-center justify-items-center z-10">

          <div className="logo">
            <Image src="https://webnailsbucket.s3.amazonaws.com/beon/logo+beon-01.svg" alt="Icon" width={152} height={209}/>
          </div>
          <a 
            title="booking-link"
            href="/booking" 
            target="_blank"
            rel="noopener noreferrer"
            >
            <button className="uppercase bg-theme-14 mt-10 rounded-xl w-[300px] h-10 flex-wrap text-theme-3 text-xl font-thin tracking-wider hover:scale-110">
            Book an appointment
            </button>  
          </a>
          
        </div>

               
        
        <div className="widget relative bottom-10 md:inline-flex w-full items-center justify-between space-y-4 xsmall:space-y-0 z-30">
          <div className="left_widget w-full inline-flex items-center justify-center md:justify-start md:w-[50%] xsmall:space-x-6">
            <div className="md:flex text-theme-4">
              <CurrentWeather data={hourly_data.list[0]} city={hourly_data.city} />
            </div>
          </div>

          <div className="right_widget grid place-items-center md:place-items-end w-full xsmall:w-280px md:w-[450px] mx-auto xsmall:mx-0 scale-75 xsmall:-ml-16 md:-mr-20">
            <Image src="https://webnailsbucket.s3.amazonaws.com/pasch/How+can+i+help+you-01.svg" 
              className=""
              alt="Icon" 
              width={200} 
              height={50} 
              style={{
                width: '100%',
                height: 'auto',
            }}/>

            <iframe 
              className="rounded-lg mb-4"
              title="radio_bar"
              src="https://webnailsbucket.s3.amazonaws.com/pasch/radio.html" 
              width="280" 
              height="120"
              style={{ border: 0, overflow: "hidden" }}
              allowFullScreen={false}
              aria-hidden="false"
              tabIndex={0}
              >
            </iframe>
            {/*
            <Image src="https://webnailsbucket.s3.amazonaws.com/pasch/Music+bar.svg" 
              alt="Icon" 
              width={280} 
              height={50} 
              sizes="100%"
              style={{
                width: '100%',
                height: 'auto',
            }}/>*/}
          </div>
        </div>
        
      </div>

      <div className="social_widget w-12 h-60 flex flex-col absolute top-[20vh] bg-theme-3 bg-opacity-25 left-0 rounded-xl items-center justify-around z-20">
        <a 
          title="social-link"
          href="https://www.facebook.com/Beonnail" 
          target="_blank"
          rel="noopener noreferrer"
          className="
          facebook_link
          bg-[url('https://webnailsbucket.s3.amazonaws.com/pasch/Icon+Logo-02.svg')] 
          hover:bg-[url('https://webnailsbucket.s3.amazonaws.com/pasch/facebook.png')] 
          hover:scale-110
          bg-cover w-10 h-10"
          >
        </a>

        <a 
          title="social-link"
          href="https://www.instagram.com/beonnails/" 
          target="_blank"
          rel="noopener noreferrer"
          className="
          instagram_link
          bg-[url('https://webnailsbucket.s3.amazonaws.com/pasch/Icon+Logo-03.svg')] 
          hover:bg-[url('https://webnailsbucket.s3.amazonaws.com/pasch/insta.png')] 
          hover:scale-110
          bg-cover w-10 h-10"
          >
        </a>

        <a 
          title="social-link"
          href="https://www.yelp.com/biz/beon-nails-wall" 
          target="_blank"
          rel="noopener noreferrer"
          className="
          yelp_link
          bg-[url('https://webnailsbucket.s3.amazonaws.com/pasch/Icon+Logo-06.svg')] 
          hover:bg-[url('https://webnailsbucket.s3.amazonaws.com/pasch/yelp.png')] 
          hover:scale-110
          bg-cover w-10 h-10"
          >
        </a>

        <a 
          title="social-link"
          href="tel:(732)-442-4567" 
          target="_blank"
          rel="noopener noreferrer"
          className="
          call_link
          bg-[url('https://webnailsbucket.s3.amazonaws.com/pasch/Icon+Logo-05.svg')] 
          hover:bg-[url('https://webnailsbucket.s3.amazonaws.com/pasch/call.png')] 
          hover:scale-110
          bg-cover w-10 h-10"
          >
        </a>

        <a 
          title="social-link"
          href="https://maps.app.goo.gl/1pvrQcD7HsSSic1J9" 
          target="_blank"
          rel="noopener noreferrer"
          className="
          google_link
          bg-[url('https://webnailsbucket.s3.amazonaws.com/pasch/Icon+Logo-04.svg')] 
          hover:bg-[url('https://webnailsbucket.s3.amazonaws.com/pasch/google.png')] 
          hover:scale-110
          bg-cover w-10 h-10"
          >
        </a>
      </div>

      <Script src="https://cdn.tailwindcss.com"></Script> 

      <div className="background flex w-full h-screen absolute top-0 m-0 overflow-hidden -z-50">
         <video className="wmp4-bg w-full h-screen object-cover absolute top-0 z-0"
          loop muted autoPlay
          src="https://webnailsbucket.s3.amazonaws.com/beon/Beon+hoa+bg+2-vmake.mp4">
        </video>

        <div className="w-full h-screen absolute top-10 z-10 scale-110">
          <Image src="https://webnailsbucket.s3.amazonaws.com/beon/home+bg+A-01-01.png" 
            alt="bg"
            layout="fill"
            objectFit="cover"
            />
        </div>
       
      </div>
        
    </>
  )
}
