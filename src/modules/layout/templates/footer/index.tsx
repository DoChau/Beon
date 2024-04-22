import Image from "next/image"

export default async function Footer() {
  return (
    <footer className="border-t border-ui-border-base w-full p-6 h-fit z-50 font-futura font-normal text-xs">
      <div className="w-full max-w-6xl grid gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:mx-auto">
        <div className="w-full items-start justify-start space-y-2">
          <div>
            <a 
              className="inline-flex space-x-4 items-center"
              title="call-divnk"
              href="/" 
              rel="noopener noreferrer"
              >
              <Image src="https://webnailsbucket.s3.amazonaws.com/beon/logo-beon-black.svg" 
                alt="logo" 
                width={155} 
                height={48} 
                style={{
                  width: '230px',
                  height: 'auto',
                }}/>
              </a>
          </div>

          <div>
            <a 
              className="inline-flex space-x-4 items-center"
              title="call-link"
              href="tel:(732)4424567" 
              target="_blank"
              rel="noopener noreferrer"
              >
              <Image src="https://webnailsbucket.s3.amazonaws.com/pasch/phone.svg" 
                alt="icon" 
                width={20} 
                height={20} 
                />
              <h2>(732) 442 - 4567</h2>  
            </a>
          </div>

          <div>
            <a  
              className="inline-flex space-x-4 items-center"
              title="address-divnk"
              href="https://goo.gl/maps/favaaTdqUcUKs32v6" 
              target="_blank"
              rel="noopener noreferrer"
              >
              <Image src="https://webnailsbucket.s3.amazonaws.com/pasch/Address.svg" 
                alt="icon" 
                width={20} 
                height={20} 
                />
              <div>
                <p>1933 State Route 35 Unit 104</p>  
                <p>Wall Township, NJ 07719</p>  
              </div>
              
            </a>
          </div>
        </div>

        <div className="w-full items-start justify-start space-y-2">
          <div>
            <a 
              className="inline-flex space-x-4 items-center uppercase"
              title="policy-divnk"
              href="/policy" 
              rel="noopener noreferrer"
              >
              <h2><strong>POLICY</strong></h2>  
            </a>
          </div>

          <div>
            <a 
              className="inline-flex space-x-4 items-center uppercase"
              title="business-divnk"
              href="/policy" 
              rel="noopener noreferrer"
              >
              <h2><strong>BUSINESS HOURS</strong></h2>  
            </a>
          </div>

          <div>
            <h2>Mon – Sat: 09:30 am – 07:30 pm</h2>  
          </div>

          <div>
            <h2>Sun: 10:00 am – 06:00 pm</h2>  
          </div>
        </div>

        <div className="w-full items-start justify-start space-y-2">
          <div>
            <h2><strong>CLOSING HOLIDAYS</strong></h2>  
          </div>
          <div className="grid grid-cols-2">
            <p>
              New Years  
            </p>
            <p>
              Easters
            </p>
            <p>
              Fourth of July
            </p>
            <p>
              Thanksgiving
            </p>
            <p>
              Christmas 
            </p>
          </div>
        </div>

        <div className="w-full items-start justify-start space-y-2">
          <div>
            <div>
              <h2><strong>NEWS & UPDATE</strong></h2>  
            </div>
            <div>
              <h2>Be the first to hear about new product launches and enjoy your first podivsh order</h2>  
            </div>
          </div>

          <div className="relative md:block w-[80%]">
            <div className="absolute inset-y-0 end-2 flex items-center ps-3 pointer-events-none">
              <Image src="https://webnailsbucket.s3.amazonaws.com/pasch/telegram-black.svg" 
                alt="icon" 
                width={20} 
                height={20} 
                />
              <span className="sr-only">Send icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-2 text-sm bg-transparent text-grey-300 focus:ring-theme-1 border-0 border-b"
              placeholder="Enter your mail"
            />
          </div>
        </div>
          

      </div>
    </footer>
  )
}
