import { Metadata } from "next"
import Image from "next/image"
import Script
 from "next/script"
export const metadata: Metadata = {
  title: "Beon Nails - 1933 State Route 35 Unit 104, NJ 07719",
  description:
    "Happy Hour and more...",
}

export default async function News() {
    return (
    <>
      <div className="w-full bg-gray-300 text-black grid gap-4 xsmall:gap-6 font-futura">
        <div className="Banner w-full h-fit xl:h-[300px] overflow-hidden mx-auto">
          <Image src="https://webnailsbucket.s3.amazonaws.com/pasch/news-banner.png" 
          alt="banner" 
          width={1440} 
          height={300} 
          style={{
            width: '100%',
            height: 'auto',
          }}/>
        </div>
        <Script type="text/javascript" src="https://plugin.mysalononline.com/Scripts/external/bookingplugin.js"></Script>

        <div className="w-full max-w-6xl min-h-screen mx-auto grid place-content-start justify-center overflow-hidden md:gap-6">
            <h1 className="Services-title font-normal text-xl text-black md:text-2xl uppercase mx-auto drop-shadow-xl">Booking</h1>
            <iframe 
              className="mb-4 bg-[url('https://webnailsbucket.s3.amazonaws.com/beon/bouncing-circles.svg')] bg-center bg-[length:50px_50px] bg-no-repeat"
              title="booking"
              src="https://plugin.mysalononline.com/External/BookingPlugin/?guid=e907fce7-9cbb-44e8-8db8-bc926cf4f703" 
              width="430px"
              height="460px"
              style={{ border: 0 }}
              allowFullScreen={false}
              aria-hidden="false"
              tabIndex={0} 
              >
            </iframe>
        </div>
      </div>
    </>
)}
