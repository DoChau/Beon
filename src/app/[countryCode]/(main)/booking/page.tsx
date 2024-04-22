import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Beon Nails - 1933 State Route 35 Unit 104, NJ 07719",
  description:
    "Happy Hour and more...",
}

export default async function News() {
    return (
    <>
      <div className="w-full bg-theme-10 grid gap-4 xsmall:gap-6 font-futura text-theme-4">
        <div className="Banner w-full h-fit mx-auto z-0">
          <Image src="https://webnailsbucket.s3.amazonaws.com/pasch/news-banner.png" 
          alt="banner" 
          width={1440} 
          height={300} 
          style={{
            width: '100%',
            height: 'auto',
          }}/>
        </div>

        <div className="w-full max-w-6xl min-h-screen mx-auto grid place-content-start justify-center overflow-hidden md:gap-6">
            <h1 className="Services-title font-normal text-xl md:text-3xl uppercase drop-shadow-xl text-center">Booking</h1>
            <iframe 
              className="rounded-lg mb-4"
              title="booking"
              src="https://webnailsbucket.s3.amazonaws.com/beon/booking.html" 
              width="700px"
              height="800px"
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
