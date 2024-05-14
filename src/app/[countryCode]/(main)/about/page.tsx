import { Metadata } from "next"
import Image from "next/image"
import TabsComponent from "@modules/layout/components/tabs/TabsComponent"
import React from "react";

export const metadata: Metadata = {
  title: "Beon Nails - 1933 State Route 35 Unit 104, NJ 07719",
  description:
    "Happy Hour and more...",
}
export default async function About() {
    return (
    <>        

    <div className="w-full bg-base-100 text-base-content grid gap-4 xsmall:gap-6 font-futura font-thin text-sm">
      <div className="Banner w-full h-fit xl:h-[300px] overflow-hidden mx-auto">
        <Image src="https://webnailsbucket.s3.amazonaws.com/beon/banner_.jpg" 
          alt="banner" 
          width={1440} 
          height={300} 
          sizes="100%"
          style={{
            width: '100%',
            height: 'auto',
          }}/>
      </div>
      
      <div className="w-full max-w-6xl min-h-screen mx-auto grid place-content-start gap-4 xsmall:gap-6">
        <h1 className="Services-title font-normal text-xl text-accent md:text-3xl uppercase mx-auto drop-shadow-xl">OUR COLLECTION</h1>
        <TabsComponent items={items} />
      </div>
    </div>
    </>
)}


const items = [
  {
    title: 'Description',
    content: (
      <>
        <Image className="xsmall:w-[35%] mx-auto mb-4 rounded-xl shadow-xl" 
          src="https://webnailsbucket.s3.amazonaws.com/beon/banner+(2).jpg" 
          alt="banner" 
          width={365} 
          height={365} 
          />
        <div className="xsmall:w-[60%] space-y-4 text-justify">
          <p>
          Welcome to Beon Nails. Where your comfort, safety & satisfaction are our top priority. We offer both the latest techniques and products in hopes of replicating that same experience of enlightenment and beauty while servicing you in a relaxing and comfortable atmosphere. Our professionally trained staff is dedicated to delivering exceptional value in assisting your nails into looking healthy, vibrant and beautiful. We provides a complete collection of therapeutic and refreshing nail care as well as waxing.                   
          </p>
          <p>
          Our goal is to simply give our client the ultimate experience in nail pampering, ensuring that they walk out feeling great! Our clients love Beon nails for the great level of hospitality, customer service and quality. We strive to do our best and welcome your comments and feedback. In keeping with our commitment to cleanliness and hygiene, we adhere to strict sanitation practices for the protection of your health. Beon nails appreciates your patronage!                    
          </p>
        </div>
      </>
      
    ),
  },
  {
    title: 'Location',
    content: (
      <>
      <div className="w-full">
        <div>
          <iframe 
            className="rounded-lg mb-4"
            title="google map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.453241730264!2d-74.05699919999999!3d40.15446130000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c187937bff4069%3A0xeb4e81e656baf348!2sBeOn%20Nails!5e0!3m2!1sen!2s!4v1713779072183!5m2!1sen!2s" 
            width="100%" 
            height="450"
            style={{ border: 0 }}
            allowFullScreen={false}
            aria-hidden="false"
            tabIndex={0}
            >
          </iframe>
          <a 
            title="social-link"
            href="https://goo.gl/maps/favaaTdqUcUKs32v6" 
            target="_blank"
            rel="noopener noreferrer"
            >
            <h1 className="text-center text-xl my-6 uppercase underline underline-offset-4"><strong>Direction</strong></h1>
          </a>
        </div>
        <div className="w-full xsmall:inline-flex items-start justify-center xsmall:space-x-10">
          <Image className="xsmall:w-[35%] rounded-xl mx-auto mb-4 shadow-xl" 
          src="https://webnailsbucket.s3.amazonaws.com/beon/banner+(1).jpg" 
          alt="banner" 
          width={365} 
          height={365} 
          />
          <div className="xsmall:w-[60%] space-y-4 text-justify">
            <p>
            Your Ultimate Destination for Beauty in Wall Township, NJ; Beon Nails is the destination for all your nail care needs. Our goal is to provide customer service and satisfaction without compromising our professional integrity and the satisfaction of our customers. We are run by the most qualified and knowledgeable professionals dedicated to the art of nail care and beauty.                      
            </p>
            <p>
            All of our products used in treatments are from the top brands. We also use Dipping Powder from brands such as SNS &OPI. We are a clean salon with your safety as our first priority! We will always take pride in ourselves in offering you a relaxing and luxurious spa experience.
            </p>
          </div>    
        </div>
      </div>
      
      </>
    ),
  },
  {
    title: 'Experience',
    content: (
      <>
      <Image className="xsmall:w-[35%] mx-auto mb-4 shadow-xl" 
        src="https://webnailsbucket.s3.amazonaws.com/pasch/experience-banner.png" 
        alt="banner" 
        width={365} 
        height={365} 
        />
      <div className="xsmall:w-[60%] space-y-4 text-justify">
        <p>
        @ Beon nails – We offer: nail care services & waxing.  Our staff has undergone extensive training on safety procedure and healthy nail care.                      
        </p>
        <p>
        Do you have specific nail request? Bring us your inspiration and we’d love to work with you on everything from color to shape, pattern to polish, length to volume. If you want something special but aren’t exactly sure, our technician will consult with you to find the perfect nail to make your day come true.                      
        </p>
      </div>   
      </>
    ),
  },
  
];
