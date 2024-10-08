//import { Product } from "@medusajs/medusa"
import { Metadata } from "next"
import Image from "next/image"
import Script from "next/script"
import BgSlider from '@modules/home/components/BgSlider'
import BgSliderMobile from "@modules/home/components/BgSlider mobile"
//import { getCollectionsList, getProductsList, getRegion } from "@lib/data"
//import FeaturedProducts from "@modules/home/components/featured-products"
//import Hero from "@modules/home/components/hero"
//import Iframe from 'react-iframe'
//import Script from 'next/script'

//logo text clip
//          <link rel="preconnect" href="https://fonts.googleapis.com"/>
//<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
//<h1 className="rainbow-text font-medium justify-self-center z-10">
//  P &nbsp; SCH
//</h1>

import './path.css'
import lineSvg from './lines.svg'

//weather widget get data
import { Location, HourlyForecastResponse } from "lib/weather-plugin/types"
import { getHourlyData } from "lib/weather-plugin/getHourlyData"
import CurrentWeather from "lib/weather-plugin/CurrentWeather"
import HourlyForecast from "lib/weather-plugin/HourlyForecast"
import { notFound } from "next/navigation"
import SocialLink from "@modules/layout/components/socialLink"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
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
      <div className="max-w-6xl w-full h-screen -mb-12 sm:-mb-16 p-5 mx-auto items-center overflow-hidden font-futura text-gray-800 z-0">
        

        <div className="logocontent h-2/3 flex flex-col items-center mx-auto justify-center z-10">

          <div className="logo">
            <Image src="https://webnailsbucket.s3.amazonaws.com/beon/logo+beon-01.svg" alt="logo" width={152} height={209}/>
          </div>

          
          <LocalizedClientLink 
            className="mt-10 hover:animate-scale-up-loop"
            title="booking-link"
            href="/booking" 
            target="_blank"
            rel="noopener noreferrer"
            >
            <Image               
              src="https://webnailsbucket.s3.amazonaws.com/beon/bookbutton.png" 
              alt="bookbutton" 
              width={300} 
              height={70}
            />
            
          </LocalizedClientLink>
          
        </div>

        <div className="widget pb-20 h-1/3 md:inline-flex w-full items-end justify-center space-y-4 xlg:space-y-0 z-30">
          <div className="social_widget hidden lg:inline-flex w-1/3 h-20 items-center justify-start space-x-2 z-20">
            <SocialLink/>
          </div>
         
          <div className="left_widget w-full inline-flex items-center justify-center lg:w-1/3 h-20 lg:space-x-6">
            <div className="md:flex">
              <CurrentWeather data={hourly_data.list[0]} city={hourly_data.city} />
            </div>
          </div>

          <div className="right_widget grid place-items-center text-sm md:place-items-end w-full lg:w-1/3 h-20 mx-auto xlg:mx-0">
            <div className="my-4 space-x-6 items-center">
              <p className="inline-flex">
                Hello, how can i help you?
              </p>
              <a 
                className="inline-flex underline text-xs"
                href="tel:(732)-442-4567"
                >
              Customer Services
              </a>
            </div>

            <iframe 
              className="rounded-lg -mt-10 -mb-4 bg-transparent scale-75"
              title="radio_bar"
              src="https://webnailsbucket.s3.amazonaws.com/common/radio.html" 
              width="280" 
              height="100"
              style={{ border: 0, overflow: "hidden"}}
              allowFullScreen={false}
              aria-hidden="false"
              tabIndex={0}
              >
            </iframe>
          </div>
        </div>
        
      </div>

      <div className="social_widget lg:hidden w-12 h-60 flex flex-col absolute top-[25vh] bg-theme-3 bg-opacity-25 left-0 rounded-xl items-center justify-around z-20">
        <SocialLink/>
      </div>

      {/*<Script src="https://cdn.tailwindcss.com"></Script>*/}

      <div className="background w-full h-screen absolute top-0 m-0 overflow-hidden -z-50">
  
         <div className="svg-path-desktop w-full h-screen hidden xl:block absolute top-0 z-20">
          <svg viewBox="0 0 1442 825" className="-mt-[1px] pl-1">
            <path className="path1" fill="none" stroke="white" stroke-width="2" d="M433.66,824.04c0-.63-.01-250.7,0-432.3.01-164.53,134-297.9,299.27-297.9h0c112.06,0,209.54,62.18,259.52,153.77l449.06,1.27"/>
            <path className="path" fill="none" stroke="white" stroke-width="2" d="M384.98,824.13V308.95h0c0-112.04-91.23-202.86-203.78-202.86H6.89"/>
            <path className="path" fill="none" stroke="white" stroke-width="2" d="M420.52,824.06v-432.56c0-171.68,139.8-310.85,312.25-310.85h8.78"/>
            <path className="path" fill="none" stroke="white" stroke-width="2" d="M2.51,751.21c2.09-1.68,88.06-79.49,140.92-127.35,26.12-23.65,60.15-36.75,95.45-36.75h146.1"/>
            <path className="path" fill="none" stroke="white" stroke-width="2" d="M372.08,473.71c23.66-.35,48.43,0,48.43,0"/>
            <path className="path" fill="none" stroke="white" stroke-width="2" d="M394.93,480.72 L394.93,824.04"/>

          </svg>
                  
          <Image 
            className="flowerSvg absolute top-0 animate-fade-in-top-slow"
            src="https://webnailsbucket.s3.amazonaws.com/beon/home-bg/path3.png" 
            alt="flowerSvg"
            width={2880}
            height={1650}
            />
        </div>

        <div className="svg-path-mobile w-full h-screen xl:hidden absolute top-0 z-20">
          <svg viewBox="0 0 345 689" className="mt-[2px]">
            <path className="path1" fill="#ffffff60" stroke="#ffffff" stroke-width="1" d="M344.42,335.44s-65.59,14.62-141.92,97.44c-76.33,82.83-75.75,128.96-75.75,128.96l10.21,1.96s.13-42.68,64.37-116.49c50.91-58.48,87.7-87.52,143.1-111.88Z"/>
            <path className="path1" fill="#ffffff60" stroke="#ffffff" stroke-width="1" d="M150.74,335.44c25.41-164.03,8.69-264.48,8.69-264.48,0,0,2.67,167.03-7.04,217.92-9.71,50.89-16.2,141.29-13.5,185.14-.09-50.41,11.85-138.59,11.85-138.59Z"/>
            <path className="path1" fill="#ffffff60" stroke="#ffffff" stroke-width="1" d="M61.99,535.23s-13.52-21.68-19.47-61.2c-5.95-39.52-20.4-90.16,18.1-191.46s24.9-189.11,24.9-189.11c0,0,10.77,48.38,4.43,105.69-6.53,59-25.09,78.59-53.96,171.7-31.71,102.26,23.35,162.67,23.35,162.67"/>
            <path className="path1" fill="#ffffff60" stroke="#ffffff" stroke-width="1" d="M106.37,187.38c.18,13.49,1.61,26.93,4.62,40.09,5.92,25.95,12.19,72.48,3,134.77-14.62,99.07-18.59,159.28-14.62,191.54,0,0,.94-53.39,8.65-113.32,9.76-75.79,22.18-147.25,15.48-200.84-6.69-53.59-25.58-100.15-25.58-100.15,0,0,8.16,26.7,8.45,47.91Z"/>
            <path className="path1" fill="#ffffff60" stroke="#ffffff" stroke-width="1" d="M35.83,121.66s22.12,100.91,10.75,243.02-3.75,156.82-3.75,156.82c0,0-22.02-12.82-42.83-47.47,1.65-91.49,1.65-313.34,1.65-313.34,0,0,5.71-8.49,16.39-21.21,10.68-12.72,17.79-17.82,17.79-17.82Z"/>

          </svg>
          
        </div>

        <div className="w-full h-screen hidden xl:block absolute top-0 z-10">
          <BgSlider/>
        </div>

        <div className="w-full h-screen xl:hidden absolute top-0 z-10">
          <BgSliderMobile/>
        </div>
               
        <div className="w-full h-screen hidden xl:block absolute top-0 z-0">
          <Image src="https://webnailsbucket.s3.amazonaws.com/beon/home-bg/Beon+Web+redesign+2024+R2-09.png" 
            alt="bg"
            width={2880}
            height={1650}
            />
        </div>
      </div>
        
    </>
  )
}
