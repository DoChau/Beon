import { Metadata } from "next"
import Image from "next/image"
import TabsComponent from "@modules/layout/components/tabs/TabsComponent"



export const metadata: Metadata = {
  title: "Beon Nails - 1933 State Route 35 Unit 104, NJ 07719",
  description:
    "Happy Hour and more...",
}

export default async function Hiring() {
    return (
    <>

    <div className="w-full bg-gray-300 text-black grid gap-4 xsmall:gap-6 font-futura text-sm">
      <div className="Banner w-full h-fit xl:h-[300px] object-bottom overflow-hidden mx-auto">
          <Image src="https://webnailsbucket.s3.amazonaws.com/beon/banner+(3).jpg" 
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
      
        <h1 className="Services-title font-normal text-xl text-black md:text-2xl uppercase mx-auto drop-shadow-xl">Now hiring</h1>
        <TabsComponent items={items} />

        <div className="w-full px-4">
            <div className="w-full grid mt-5 items-start justify-center space-y-4">
              <div className="w-full">
              <p className="w-[300px] uppercase font-light text-xl text-center border-solid border-2 border-base-content"> Please call</p>
              </div>
              <a 
                title="social-link"
                href="tel:(732)4424567" 
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase text-xl text-center underline underline-offset-4"
                >
                <strong>(732) – 442 – 4567</strong>
              </a>
            </div>
        </div>
      </div>
    </div>
    </>
)}


const items = [
  {
    title: 'MANAGER',
    content: (
      <>
      <Image className="xsmall:w-[35%] mx-auto mb-4 shadow-xl" src="https://webnailsbucket.s3.amazonaws.com/pasch/manager-banner.png" 
        alt="banner" 
        width={365}
        height={365}
        sizes="100%"
        />
      <div className="xsmall:w-[60%]">
        <strong>BEAUTY SALON MANAGER</strong>
        <ul className="text-justify">
          <li>
            Part Time and Full Time positions are Now Available!
          </li>
          <li>
            Beauty Salon Manager responsibilities include supervising staff, scheduling shifts, promoting our services and keeping updated records of expenses and revenues.
            If you are familiar with beauty treatments and have excellent organizational abilities, we’d like to meet you. Ultimately, you’ll help boost client satisfaction and increase our revenues.
          </li>
        </ul>
      </div>
      </>
      
    ),
  },
  {
    title: 'RECEPTIONISTS',
    content: (
      <>
      <Image className="xsmall:w-[35%] mx-auto mb-4 shadow-xl" src="https://webnailsbucket.s3.amazonaws.com/pasch/receptionist-banner.png" 
        alt="banner" 
        width={365} 
        height={365} 
        sizes="100%"
        />
      <div className="xsmall:w-[60%]">
        <strong>RECEPTIONISTS</strong>
        <ul className="text-justify">
          <li>
            Part Time positions are Now Available!
          </li>
          <li>
            Looking for a dedicated and friendly front desk receptionist to greet our guests and assist our salon manager. 
            Must be proficient in using computers and related technology. Prior salon experience a plus but not required.            
          </li>
        </ul>
      </div>
      </>
    ),
  },
  {
    title: 'MANICURISTS',
    content: (
      <>
      <Image className="xsmall:w-[35%] mb-4 mx-auto" src="https://webnailsbucket.s3.amazonaws.com/pasch/manicurists-banner.png" 
      alt="banner" 
      width={365} 
      height={365} 
      sizes="100%"
      />
      <div className="xsmall:w-[60%]">
        <strong>MANICURISTS</strong>
        <ul className="text-justify">
          <li>
            Full Time positions are now Available!
          </li>
          <li>
            We are looking for dedicated friendly talented & experienced nail Technicians.                    
          </li>
          <li>
            Chúng tôi cần tuyển nhiều nhân viên có trách nhiệm, có tài năng và dồi dào kinh nghiệm làm móng tay. 
            Đảm bảo lương cao và nhiều ưu đãi khác, mọi chi tiết xin vui lòng liên hệ                    
          </li>
        </ul>
      </div>                
      </>
    ),
  },
  
];