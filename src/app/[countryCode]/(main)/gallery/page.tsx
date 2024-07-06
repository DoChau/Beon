import { Metadata } from "next"
import Image from "next/image"
import { StrictMode } from "react";
import App from "./gallery";

export const metadata: Metadata = {
  title: "Beon Nails - 1933 State Route 35 Unit 104, NJ 07719",
  description:
    "Happy Hour and more...",
}
export default async function Gallery() {
    return (
    <>
      <div className="w-full bg-gray-300 text-base-content grid gap-4 xsmall:gap-6 font-futura">
        <div className="Banner w-full h-fit xl:h-[300px] object-bottom overflow-hidden mx-auto">
          <Image src="https://webnailsbucket.s3.amazonaws.com/pasch/news-banner.png" 
          alt="banner" 
          width={1440} 
          height={300} 
          style={{
            width: '100%',
            height: 'auto',
          }}/>
        </div>

        <div className="w-full max-w-6xl min-h-screen mx-auto grid place-content-start gap-4 md:gap-6">
          <h1 className="Services-title font-normal text-xl text-center md:text-2xl uppercase drop-shadow-xl">Beon Nails space</h1>
      
          <h1 className="Services-title font-normal text-xl text-center md:text-2xl uppercase drop-shadow-xl">Gallery</h1>
            <StrictMode>
              <App />
            </StrictMode>
        </div>
      
      </div>
    </>
)}
