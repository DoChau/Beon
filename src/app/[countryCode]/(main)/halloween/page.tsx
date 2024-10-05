//import { Product } from "@medusajs/medusa"
import { Metadata } from "next"
import Image from "next/image"
import SocialLink from "@modules/layout/components/socialLink"
import BgSlider from "@modules/home/components/BgSlider"
import PopupLoader from "@modules/layout/components/popup"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import "./style.css"
//weather widget get data
import { Location, HourlyForecastResponse } from "lib/weather-plugin/types"
import { getHourlyData } from "lib/weather-plugin/getHourlyData"
import CurrentWeather from "lib/weather-plugin/CurrentWeather"
import HourlyForecast from "lib/weather-plugin/HourlyForecast"
import { notFound } from "next/navigation"
import Booking_button from "@modules/layout/components/booking-button"
import './path.css'

const DEFAULT_LOCATION: Location = {
  city: "Wall Township, NJ, US",
  coord: {
    lat: "40.166",
    lon: "-74.098",
  },
}

const { lat, lon } = DEFAULT_LOCATION.coord

export const metadata: Metadata = {
  title: "Beon Nails - 1933 State Route 35 Unit 104, NJ 07719",
  description: "Happy Hour and more...",
}

export default async function Home() {
  //get weather data
  const HourlyDataRequest: HourlyForecastResponse = await getHourlyData({
    lat,
    lon,
  })

  const [hourly_data] = await Promise.all([HourlyDataRequest])
  if (!hourly_data) return notFound()

  return (
    <>
      <audio
        src={
          "https://webnailsbucket.s3.amazonaws.com/holmdel/halloween2024/halloween+sound.mp3"
        }
        autoPlay
      ></audio>
      <PopupLoader timeIn={1600} timeOut={1700} style={1} />
      <PopupLoader timeIn={1800} timeOut={1900} style={1} />

      <div className="max-w-6xl w-full h-screen -mb-12 sm:-mb-16 p-5 mx-auto items-center overflow-hidden font-futura text-white z-0">
        <div className="logocontent h-2/3 flex flex-col items-center mx-auto place-content-center z-30">
          <LocalizedClientLink 
            className={`Logo scale-75 md:scale-100 animate-appeared-fade-3 z-40`}
            key={"/booking"}
            href={"/booking"}
            target="_blank"
            >
            <img
              className="mt-10 hover:animate-scale-up-loop"
              src="https://webnailsbucket.s3.amazonaws.com/beon/halloween2024/Asset+8.png"
              alt="bookbutton"
              width={275}
              height={262}
            />
          </LocalizedClientLink>

          <div className="Ghosts inline-flex -space-x-20 absolute top-[15%] animate-pulse">
            
            <img
                src="https://webnailsbucket.s3.amazonaws.com/beon/halloween2024/Asset+3.png"
                alt="ghost"
                className="animate-flowup2 mt-40"
                width={198}
                height={280}
              />

            <img
                src="https://webnailsbucket.s3.amazonaws.com/beon/halloween2024/Asset+4.png"
                alt="ghost"
                className="animate-flowup1"
                width={305}
                height={492}
              />

            <img
                src="https://webnailsbucket.s3.amazonaws.com/beon/halloween2024/Asset+6.png"
                alt="ghost"
                className="animate-flowup3 mt-40"
                width={182}
                height={282}
              />
        
          </div>
        </div>

        
          
        <div className="widget pb-20 h-1/3 md:inline-flex w-full items-end justify-center space-y-4 xlg:space-y-0 z-30">
          <div className="social_widget hidden lg:inline-flex w-1/3 h-20 items-center justify-start space-x-2 z-20">
            <SocialLink />
          </div>

          <div className="left_widget w-full inline-flex items-center justify-center lg:w-1/3 h-20 lg:space-x-6">
            <div className="md:flex">
              <CurrentWeather
                data={hourly_data.list[0]}
                city={hourly_data.city}
              />
            </div>
          </div>

          <div className="right_widget grid place-items-center text-sm md:place-items-end w-full lg:w-1/3 h-20 mx-auto xlg:mx-0">
            <div className="my-4 space-x-6 items-center">
              <p className="inline-flex">Hello, how can i help you?</p>
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
              style={{ border: 0, overflow: "hidden" }}
              allowFullScreen={false}
              aria-hidden="false"
              tabIndex={0}
            ></iframe>
          </div>
        </div>
      </div>

      <div className="social_widget lg:hidden w-12 h-60 flex flex-col absolute top-[25vh] bg-theme-3 bg-opacity-25 left-0 rounded-xl items-center justify-around z-20">
        <SocialLink />
      </div>

      <div className="background w-full h-screen absolute top-0 m-0 overflow-hidden -z-50">
        
        <div className="svg-path-desktop hidden xl:flex absolute top-0 z-20">
          <svg viewBox="0 0 1438.07 744.47" className="flex w-full h-screen mt-20">
            <path
              className="path1"
              fill="none"
              stroke="white"
              stroke-width="2"
              d="M431.31,744.38c0-.63-.01-250.7,0-432.3.01-164.53,133.85-297.9,298.95-297.9h0c111.94,0,209.31,62.18,259.24,153.77l448.58,1.27"
            />
            <path
              className="path1"
              fill="none"
              stroke="white"
              stroke-width="2"
              d="M382.67,744.47V229.29h0c0-112.04-91.13-202.86-203.56-202.86h-89.39"
            />
            <path
              className="path"
              fill="none"
              stroke="white"
              stroke-width="2"
              d="M369.8,394.05c23.64-.35,48.38,0,48.38,0"
            />
            <path
              className="path1"
              fill="none"
              stroke="white"
              stroke-width="2"
              d="M418.18,744.41v-432.56C418.18,140.17,557.83,1,730.09,1h8.77"
            />
            <path
              className="path1"
              fill="none"
              stroke="white"
              stroke-width="2"
              d="M.63,671.55c2.09-1.68,87.96-79.49,140.76-127.35,26.09-23.65,60.08-36.75,95.35-36.75h145.94"
            />
          </svg>

          <img
            className="flowerSvg absolute top-0 animate-fade-in-top-slow"
            src="https://webnailsbucket.s3.amazonaws.com/beon/home-bg/path3.png"
            alt="flowerSvg"
            width={2880}
            height={1650}
          />
        </div>

        <div className="w-full h-screen flex place-content-center overflow-hidden absolute top-0 bg-gray-50 -z-50">
          <img
            src="https://webnailsbucket.s3.amazonaws.com/beon/halloween2024/Asset+22.png"
            className="Bg w-full h-screen -z-50"
            alt="bg"
            width={2880}
            height={1480}
          />

          <img
              src="https://webnailsbucket.s3.amazonaws.com/beon/halloween2024/Asset+15.png"
              alt="blood"
              className="absolute -top-5 md:top-[8%] animate-flowdown16"
              width={561}
              height={676}
            />

          <img
            src="https://webnailsbucket.s3.amazonaws.com/beon/halloween2024/Asset+23.png"
            className="Glass opacity-70 w-full h-screen hidden md:flex absolute top-0 left-0 z-0"
            alt="glass"
            width={2880}
            height={1480}
          />
          
          <div className="Bats w-full h-screen absolute top-0 brightness-150 flex animate-ispin-slow -z-40">
            <img
              src="https://webnailsbucket.s3.amazonaws.com/pasch/halloween2024/bats-00001.png"
              className="absolute top-1/2 right-[150px]"
              alt="bg"
              width={35}
              height={19}
            />

            <img
              src="https://webnailsbucket.s3.amazonaws.com/pasch/halloween2024/bats-00003.png"
              className="absolute top-1/4 right-[350px]"
              alt="bg"
              width={49}
              height={35}
            />

            <img
              src="https://webnailsbucket.s3.amazonaws.com/pasch/halloween2024/bats-00005.png"
              className="absolute bottom-1/4 right-[400px]"
              alt="bg"
              width={57}
              height={23}
            />
          </div>
          <div className="Bats w-full h-screen absolute top-0 flex animate-spin-slow40 -z-10">
            <img
              src="https://webnailsbucket.s3.amazonaws.com/pasch/halloween2024/bats-00002.png"
              className="absolute bottom-1/3 left-[250px]"
              alt="bg"
              width={42}
              height={36}
            />

            <img
              src="https://webnailsbucket.s3.amazonaws.com/pasch/halloween2024/bats-00004.png"
              className="absolute top-1/4 left-[350px]"
              alt="bg"
              width={49}
              height={34}
            />
          </div>
        </div>
      </div>
    </>
  )
}
