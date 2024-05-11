import Image from "next/image"
import Themechoose from "@modules/layout/components/theme-change"
export default async function Footer() {
  return (
    <footer className="w-full p-6 h-fit z-50 font-futura font-normal text-xs text-base-content bg-secondary">
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
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M22.0001 16.92V19.92C22.0012 20.1985 21.9441 20.4741 21.8326 20.7293C21.721 20.9845 21.5574 21.2136 21.3521 21.4018C21.1469 21.5901 20.9046 21.7335 20.6408 21.8227C20.377 21.9119 20.0974 21.945 19.8201 21.92C16.7429 21.5856 13.7871 20.5341 11.1901 18.85C8.77388 17.3146 6.72539 15.2661 5.19006 12.85C3.50003 10.2412 2.4483 7.27097 2.12006 4.17997C2.09507 3.90344 2.12793 3.62474 2.21656 3.3616C2.30518 3.09846 2.44763 2.85666 2.63482 2.6516C2.82202 2.44653 3.04986 2.28268 3.30385 2.1705C3.55783 2.05831 3.8324 2.00024 4.11006 1.99997H7.11006C7.59536 1.9952 8.06585 2.16705 8.43382 2.48351C8.80179 2.79996 9.04213 3.23942 9.11005 3.71997C9.23668 4.68004 9.47151 5.6227 9.81006 6.52997C9.9446 6.8879 9.97372 7.27689 9.89396 7.65086C9.81421 8.02482 9.62892 8.36809 9.36005 8.63998L8.09006 9.90997C9.51361 12.4135 11.5865 14.4864 14.0901 15.91L15.3601 14.64C15.6319 14.3711 15.9752 14.1858 16.3492 14.1061C16.7231 14.0263 17.1121 14.0554 17.4701 14.19C18.3773 14.5285 19.32 14.7634 20.2801 14.89C20.7658 14.9585 21.2095 15.2032 21.5266 15.5775C21.8437 15.9518 22.0122 16.4296 22.0001 16.92Z" 
                />
              </svg>
              <h2>(732) 442 - 4567</h2>  
            </a>
          </div>

          <div>
            <a  
              className="inline-flex space-x-4 items-center"
              title="address-divnk"
              href="https://maps.app.goo.gl/vnL3WzMfhNfJF6df9" 
              target="_blank"
              rel="noopener noreferrer"
              >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 21H4C3.44772 21 3 20.5523 3 20V12.4142C3 12.149 3.10536 11.8946 3.29289 11.7071L11.2929 3.70711C11.6834 3.31658 12.3166 3.31658 12.7071 3.70711L20.7071 11.7071C20.8946 11.8946 21 12.149 21 12.4142V20C21 20.5523 20.5523 21 20 21H15M9 21H15M9 21V15C9 14.4477 9.44772 14 10 14H14C14.5523 14 15 14.4477 15 15V21"
                  />
              </svg>
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

          <Themechoose/>

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
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11.5003 12H5.41872M5.24634 12.7972L4.24158 15.7986C3.69128 17.4424 3.41613 18.2643 3.61359 18.7704C3.78506 19.21 4.15335 19.5432 4.6078 19.6701C5.13111 19.8161 5.92151 19.4604 7.50231 18.7491L17.6367 14.1886C19.1797 13.4942 19.9512 13.1471 20.1896 12.6648C20.3968 12.2458 20.3968 11.7541 20.1896 11.3351C19.9512 10.8529 19.1797 10.5057 17.6367 9.81135L7.48483 5.24303C5.90879 4.53382 5.12078 4.17921 4.59799 4.32468C4.14397 4.45101 3.77572 4.78336 3.60365 5.22209C3.40551 5.72728 3.67772 6.54741 4.22215 8.18767L5.24829 11.2793C5.34179 11.561 5.38855 11.7019 5.407 11.8459C5.42338 11.9738 5.42321 12.1032 5.40651 12.231C5.38768 12.375 5.34057 12.5157 5.24634 12.7972Z"                  />
              </svg>
              <span className="sr-only">Send icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-2 text-sm bg-transparent border-0 border-b border-base-content"
              placeholder="Enter your mail"
            />
          </div>
        </div>
          

      </div>
    </footer>
  )
}
